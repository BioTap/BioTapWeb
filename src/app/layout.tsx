import "../styles/index.css"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="IKO – ICO & Crypto Landing Page Template is a high-quality React Next js Template with a unique style and clean design. You can use it for multipurpose like ICO Presentation and new Crypto coins, bitcoin mining websites, cryptocurrency exchange and trading, digital currencies, finances, and business consulting. And also has comments on each section included in the template so you can easily adapt your React Next js templates to suit your needs." />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
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
      </body>
    </html>
  );
}
