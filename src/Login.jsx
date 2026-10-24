import styles from './Login.module.css'
import blossom from './assets/blossom-flower.svg'
import googleLogo from './assets/icons-google-logo.svg'
import appleLogo from './assets/icons-apple-logo.svg'

function Login() {
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

        <div className={styles.divider}>
          <span className={styles.line}></span>
          <span className={styles.dividerText}>Or</span>
          <span className={styles.line}></span>
        </div>

        <div className={styles.socials}>
          <button type="button" className={styles.socialButton}>
            <img className={styles.socialIcon} src={googleLogo} alt="Google logo" />
            Sign in with Google
          </button>
          <button type="button" className={styles.socialButton}>
            <img className={styles.socialIcon} src={appleLogo} alt="Apple logo" />
            Sign in with Apple
          </button>
        </div>

        <p className={styles.bottomText}>
          Have an account? <a href="#" className={styles.signIn}>Sign In</a>
        </p>
      </section>

      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  )
}

export default Login