import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ConsultationRequest {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company: string
  subject: string
  description: string
  preferred_time?: string
  timezone: string
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled'
  created_at: string
  updated_at: string
}