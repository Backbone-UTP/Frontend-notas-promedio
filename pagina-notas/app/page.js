import Image from 'next/image'
import Menu from './components/menu'
import styles from './page.module.css'

export default function Home() {
  return (
    <body className={styles.main}>
      <Menu></Menu>
    </body>
  )
}
