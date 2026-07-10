import { Link } from 'react-router-dom';

function AuthCard({ mode }) {
  const isRegister = mode === 'register';
  const isOtp = mode === 'otp';

  return (
    <section className="auth-card">
      <div className="auth-image">
        <img src="/auth-image.png" alt="Mountain landscape" />
      </div>
      <div className="auth-panel">
        {isOtp ? (
          <>
            <h2>Verify your email</h2>
            <p>Enter the OTP from your register email id</p>
            <div className="otp-row" aria-label="One time password">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <input key={item} inputMode="numeric" maxLength="1" aria-label={`OTP digit ${item + 1}`} />
              ))}
            </div>
            <Link className="primary-action" to="/dashboard">Proceed</Link>
          </>
        ) : (
          <>
            <h2>{isRegister ? 'Register to Admin Panel' : 'Log In to Admin Panel'}</h2>
            <p>Enter your email and password below</p>
            <label>
              Email ID
              <input type="email" placeholder="Enter your email id" />
            </label>
            <label>
              Password
              <input type="password" placeholder="Enter your password" />
            </label>
            {isRegister && (
              <label>
                Confirm Password
                <input type="password" placeholder="Enter your confirm password" />
              </label>
            )}
            <Link className="primary-action" to={isRegister ? '/otp' : '/dashboard'}>
              {isRegister ? 'Register' : 'Log In'}
            </Link>
            <p className="form-switch">
              {isRegister ? 'Already have an account?' : "Don't have an account?"}
              <Link to={isRegister ? '/login' : '/register'}>{isRegister ? ' Login' : ' Register'}</Link>
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default AuthCard;
