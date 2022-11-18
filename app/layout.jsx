import '../styles/globals.css'
import Nav from './components/Nav'
import { font } from './font'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className={font.variable}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
