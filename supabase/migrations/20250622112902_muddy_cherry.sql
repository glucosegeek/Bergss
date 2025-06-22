/*
  # Fix RLS Policy for Consultation Requests

  1. Security Updates
    - Drop existing INSERT policy that may be misconfigured
    - Create new INSERT policy for anonymous users to submit consultation requests
    - Ensure the policy allows public form submissions without authentication

  2. Policy Details
    - Allow anonymous (anon) users to insert consultation requests
    - No restrictions on the data being inserted (public form)
    - Maintains security while allowing form submissions
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Enable public form submissions" ON consultation_requests;

-- Create a new INSERT policy for anonymous users
CREATE POLICY "Allow anonymous consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure RLS is enabled (should already be enabled based on schema)
ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;