import styles from './Login.module.css'
import blossom from './assets/blossom-flower.svg'
import googleLogo from './assets/icons-google-logo.svg'
import appleLogo from './assets/icons-apple-logo.svg'
import { Input } from '@/components/ui/input'

function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.left}>
        <h1 className={styles.title}>Welcome back!</h1>
        <p className={styles.subtitle}>Enter your Credentials to access your account</p>

        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email address</label>
            <Input
              className={styles.input}
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label className={styles.label} htmlFor="password">Password</label>
              <a href="#" className={styles.forgot}>forgot password</a>
            </div>
            <Input
              className={styles.input}
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className={styles.checkboxRow}>
            <input id="remember" type="checkbox" className={styles.checkbox} />
            <label htmlFor="remember" className={styles.checkboxLabel}>
              Remember for 30 days
            </label>
          </div>

          <button type="submit" className={styles.button}>Login</button>
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
          Don’t have an account? <a href="#" className={styles.signIn}>Sign Up</a>
        </p>
      </section>

      <section className={styles.right}>
        <img className={styles.blossom} src={blossom} alt="Blossom flower" />
      </section>
    </div>
  )
}

export default Login