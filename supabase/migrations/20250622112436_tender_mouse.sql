/*
  # Fix RLS Policy for Consultation Requests

  1. Security Updates
    - Drop existing INSERT policy that may be misconfigured
    - Create new INSERT policy for anonymous users with proper configuration
    - Ensure anonymous users can submit consultation requests through the public form

  2. Policy Details
    - Allow INSERT operations for 'anon' role (public form submissions)
    - Use 'true' for both USING and WITH CHECK expressions to allow all insertions
    - This enables the public consultation form to work properly
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow public form submissions" ON consultation_requests;

-- Create a new INSERT policy for anonymous users
CREATE POLICY "Enable public form submissions"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the existing SELECT and UPDATE policies for authenticated users remain intact
-- (These should already exist based on the schema, but we'll recreate them to be safe)

DROP POLICY IF EXISTS "Allow authenticated users to read all requests" ON consultation_requests;
CREATE POLICY "Allow authenticated users to read all requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow authenticated users to update requests" ON consultation_requests;
CREATE POLICY "Allow authenticated users to update requests"
  ON consultation_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);