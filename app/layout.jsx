import '../styles/globals.css'
import Nav from './components/Nav'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
