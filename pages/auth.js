import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import styles from '@/styles/Home.module.css'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const Theme = {
    default: {
        colors: {
            brand: 'rgb(68, 62, 230)',
            brandAccent: 'rgb(78, 72, 240)',
            brandButtonText: 'white',
            defaultButtonBackground: 'rgb(28, 28, 28)',
            defaultButtonBackgroundHover: 'rgb(48, 48, 48)',
            defaultButtonBorder: 'lightgray',
            defaultButtonText: 'gray',
            dividerBackground: '#eaeaea',
            inputBackground: 'transparent',
            inputBorder: 'lightgray',
            inputBorderHover: 'gray',
            inputBorderFocus: 'gray',
            inputText: 'white',
            inputLabelText: 'gray',
            inputPlaceholder: 'darkgray',
            messageText: 'gray',
            messageTextDanger: 'red',
            anchorTextColor: 'gray',
            anchorTextHoverColor: 'darkgray',
          },
          space: {
            spaceSmall: '4px',
            spaceMedium: '8px',
            spaceLarge: '16px',
            labelBottomMargin: '8px',
            anchorBottomMargin: '4px',
            emailInputSpacing: '4px',
            socialAuthSpacing: '4px',
            buttonPadding: '10px 15px',
            inputPadding: '10px 15px',
          },
          fontSizes: {
            baseBodySize: '13px',
            baseInputSize: '14px',
            baseLabelSize: '14px',
            baseButtonSize: '14px',
          },
          fonts: {
            bodyFontFamily: `ui-sans-serif, sans-serif`,
            buttonFontFamily: `ui-sans-serif, sans-serif`,
            inputFontFamily: `ui-sans-serif, sans-serif`,
            labelFontFamily: `ui-sans-serif, sans-serif`,
          },
          borderWidths: {
            buttonBorderWidth: '1px',
            inputBorderWidth: '1px',
          },
          radii: {
            borderRadiusButton: '4px',
            buttonBorderRadius: '4px',
            inputBorderRadius: '4px',
          },
    }
}

const Authentication = () => (
    <main className={styles.main}>
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: Theme }}
            providers={['google', 'discord', 'github']}
            theme="dark"
        />
    </main>
)

export default Authentication;