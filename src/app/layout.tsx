import "../styles/index.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="BioTap – Secure Biometric Payment Solutions is a cutting-edge fintech platform that revolutionizes digital banking through advanced biometric authentication. Experience faster, safer, and more personal payment solutions with our innovative technology that combines biometric security with intelligent banking systems." />
        <link rel="icon" href="/Favicon.png" sizes="any" />
        <link rel="shortcut icon" href="/Favicon.png" />
        <link rel="apple-touch-icon" href="/Favicon.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <LanguageProvider>
          <div id="app-root">
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
