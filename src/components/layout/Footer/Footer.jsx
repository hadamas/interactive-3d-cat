import { catModel } from '../../../data/models.js'
import styles from './Footer.module.css'

// O crédito do modelo é exigido pela licença CC-BY-4.0
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Modelo 3D:{' '}
        <a href={catModel.source} target="_blank" rel="noreferrer">
          {catModel.title}
        </a>{' '}
        por{' '}
        <a href={catModel.authorUrl} target="_blank" rel="noreferrer">
          {catModel.author}
        </a>{' '}
        (
        <a href={catModel.licenseUrl} target="_blank" rel="noreferrer">
          {catModel.license}
        </a>
        )
      </p>
    </footer>
  )
}
