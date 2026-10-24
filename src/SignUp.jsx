import styles from './SignUp.module.css'
import blossom from './assets/blossom-flower.svg'

function SignUp() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <h1 className={styles.title}>Get Started Now</h1>

        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Name</label>
            <input
              className={styles.input}
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email address</label>
            <input
              className={styles.input}
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className={styles.checkboxRow}>
            <input id="terms" type="checkbox" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              I agree to the <a href="#" className={styles.link}>terms &amp; policy</a>
            </label>
          </div>

          <button type="submit" className={styles.button}>Signup</button>
        </form>
      </section>

      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  )
}

export default SignUp