/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `company` (text, required)
      - `subject` (text, required)
      - `description` (text, required)
      - `preferred_time` (text, optional)
      - `timezone` (text, required)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for public insert (form submissions)
    - Add policy for authenticated users to read all data (admin access)

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for sorting
    - Add index on status for filtering
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text NOT NULL,
  subject text NOT NULL,
  description text NOT NULL,
  preferred_time text,
  timezone text NOT NULL DEFAULT 'UTC',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Policy for public form submissions (insert only)
CREATE POLICY "Allow public form submissions"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy for authenticated users to read all consultation requests (admin access)
CREATE POLICY "Allow authenticated users to read all requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for authenticated users to update consultation requests (admin access)
CREATE POLICY "Allow authenticated users to update requests"
  ON consultation_requests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON consultation_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status ON consultation_requests(status);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_consultation_requests_updated_at
  BEFORE UPDATE ON consultation_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();