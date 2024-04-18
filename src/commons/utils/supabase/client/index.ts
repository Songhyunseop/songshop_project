import { createClient } from '@supabase/supabase-js';

const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SERVICE_KEY as string
);

const supabase = () => client;

export default supabase;
