import { createClient } from '@supabase/supabase-js';
import { Database } from 'types/database.types';

// supabase client 상수 선언으로 사용 (안그럴 시 Multiple GoTrueClient instances detected in the same browser context 경고가 출력됨)
const client = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SERVICE_KEY as string
);

const supabase = () => client;

export default supabase;
