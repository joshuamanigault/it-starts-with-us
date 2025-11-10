-- Contact form submissions table
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest TEXT NOT NULL,
  budget TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous contact submissions" ON contact_submissions
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Create policy to allow authenticated users to view all submissions (for admin)
CREATE POLICY "Allow authenticated users to view submissions" ON contact_submissions
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS contact_submissions_submitted_at_idx ON contact_submissions(submitted_at);

-- Optional: Create a view for contact statistics (if needed)
CREATE OR REPLACE VIEW contact_stats AS
SELECT 
  COUNT(*) as total_submissions,
  COUNT(*) FILTER (WHERE submitted_at >= NOW() - INTERVAL '30 days') as submissions_last_30_days,
  COUNT(*) FILTER (WHERE submitted_at >= NOW() - INTERVAL '7 days') as submissions_last_7_days,
  COUNT(DISTINCT interest) as unique_interests
FROM contact_submissions;