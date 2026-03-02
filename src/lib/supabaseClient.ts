import { createClient } from '@supabase/supabase-js'

// Эти данные ты возьмешь из настроек своего проекта в панели Supabase
// (Settings -> API)
const supabaseUrl = 'https://ciglirmzenjeudkbayqa.supabase.co'
const supabaseAnonKey = 'sb_publishable__nsA0Fd_zJFqFgVrp-Wj6Q_8kJDHy82'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
