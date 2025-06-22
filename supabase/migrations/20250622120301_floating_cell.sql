/*
  # Fix RLS policies for consultation_requests table

  1. Security Changes
    - Enable RLS on consultation_requests table
    - Allow anonymous users to INSERT consultation requests (form submissions)
    - Allow authenticated users to SELECT/UPDATE requests (admin access)
    - Prevent anonymous users from reading/updating existing data

  2. Data Protection
    - Anonymous users can only INSERT new records
    - No SELECT access for anonymous users (protects personal data)
    - Only authenticated users can view/manage consultation requests
*/

-- Ensure RLS is enabled
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow public form submissions" ON consultation_requests;
DROP POLICY IF EXISTS "Enable public form submissions" ON consultation_requests;
DROP POLICY IF EXISTS "Allow anonymous consultation requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to read all requests" ON consultation_requests;
DROP POLICY IF EXISTS "Allow authenticated users to update requests" ON consultation_requests;

-- Create INSERT policy for anonymous users (form submissions)
CREATE POLICY "Anonymous users can submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create SELECT policy for authenticated users only (admin access)
CREATE POLICY "Authenticated users can read consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create UPDATE policy for authenticated users only (admin access)
CREATE POLICY "Authenticated users can update consultation requests"
  ON consultation_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create DELETE policy for authenticated users only (admin access)
CREATE POLICY "Authenticated users can delete consultation requests"
  ON consultation_requests
  FOR DELETE
  TO authenticated
  USING (true);

-- Verify the table structure and constraints are correct
DO $$
BEGIN
  -- Ensure the status check constraint exists
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.check_constraints 
    WHERE constraint_name = 'consultation_requests_status_check'
  ) THEN
    ALTER TABLE consultation_requests 
    ADD CONSTRAINT consultation_requests_status_check 
    CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled'));
  END IF;
END $$;