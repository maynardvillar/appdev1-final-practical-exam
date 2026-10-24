import styles from './SignUp.module.css'
import blossom from './assets/blossom-flower.svg'

function SignUp() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <h1 className={styles.title}>Get Started Now</h1>
      </section>
      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  )
}

export default SignUp