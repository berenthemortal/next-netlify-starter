import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/image.jpg" alt="Example" className={styles.logo} />
      </footer>
    </>
  )
}
