import Link from 'next/link'
import styles from './Nav.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

export default function Nav () {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              {label}
            </Link>
          </li>
        ))}
      </nav>
    </header>
  )
}
