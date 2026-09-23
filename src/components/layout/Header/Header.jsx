import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>3D Animated Project</h1>
      <p className={styles.subtitle}>Move the mouse or drag to rotate</p>
    </header>
  )
}
