import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
 
function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <>    
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
      <Analytics />
    </>
  );
}
 
export default App;
