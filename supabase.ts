import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uuywtrptkmfbqgaavuwv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1eXd0cnB0a21mYnFnYWF2dXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIwODM0MzYsImV4cCI6MTk3NzY1OTQzNn0._uZMHyZVarESPNjvvzznwqNHE2hBnjSYUXnXDTx8CMU'
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});