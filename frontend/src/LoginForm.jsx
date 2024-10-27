// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './styles.css'; 

// const LoginForm = () => {
//   const [isLoginActive, setIsLoginActive] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignupClick = () => {
//     setIsLoginActive(false);
//   };

//   const handleLoginClick = () => {
//     setIsLoginActive(true);
//   };

//   const handleSignupLinkClick = () => {
//     setIsLoginActive(false); // Switch to signup form
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
    
//     // Mock login validation
//     if (email === "user@example.com" && password === "password123") {
//       // Show success popup
//       alert("Login successful!");

//       // Redirect to another page (e.g., Dashboard)
//       navigate('/Dashboard'); // Make sure to set this route in your App.js
//     } else {
//       alert("Invalid email or password.");
//     }
//   };

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//     alert("Signup functionality not implemented yet.");
//   };

//   return (
//     <div className="wrapper">
//       <div className="title-text">
//         <div className={`title login ${isLoginActive ? "active" : ""}`}>Login Form</div>
//         <div className={`title signup ${!isLoginActive ? "active" : ""}`}>Signup Form</div>
//       </div>
//       <div className="form-container">
//         <div className="slide-controls">
//           <input type="radio" name="slide" id="login" checked={isLoginActive} readOnly />
//           <input type="radio" name="slide" id="signup" checked={!isLoginActive} readOnly />
//           <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
//           <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>Signup</label>
//           <div className={`slider-tab ${isLoginActive ? "login" : "signup"}`}></div>
//         </div>
//         <div className="form-inner">
//           {isLoginActive ? (
//             <form className="login" onSubmit={handleLoginSubmit}>
//               <div className="field">
//                 <input
//                   type="text"
//                   placeholder="Email Address"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="field">
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="pass-link"><a href="#">Forgot password?</a></div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <input type="submit" value="Login" />
//               </div>
//               <div className="signup-link">
//                 Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup now</a>
//               </div>
//             </form>
//           ) : (
//             <form className="signup" onSubmit={handleSignupSubmit}>
//               <div className="field">
//                 <input type="text" placeholder="Email Address" required />
//               </div>
//               <div className="field">
//                 <input type="password" placeholder="Password" required />
//               </div>
//               <div className="field">
//                 <input type="password" placeholder="Confirm password" required />
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <input type="submit" value="Signup" />
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const LoginForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignupClick = () => {
    setIsLoginActive(false);
  };

  const handleLoginClick = () => {
    setIsLoginActive(true);
  };

  const handleSignupLinkClick = () => {
    setIsLoginActive(false); // Switch to signup form
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Logic to handle login (this is where you integrate API calls)
    console.log('Logging in with:', email, password);

    // You can use an authentication API or backend service here.
    // Example: callLoginAPI(email, password) and then redirect.

    // After successful login, navigate to another page
    navigate('/Dashboard');  // Redirect to Dashboard or desired page
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Basic validation for signup form
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle signup logic (this is where you integrate API calls)
    console.log('Signing up with:', signupEmail, signupPassword);

    // After successful signup, clear form and switch to login form
    setSignupEmail('');
    setSignupPassword('');
    setSignupConfirmPassword('');
    setIsLoginActive(true);  // Switch back to the login form
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title login ${isLoginActive ? "active" : ""}`}>Login Form</div>
        <div className={`title signup ${!isLoginActive ? "active" : ""}`}>Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLoginActive} readOnly />
          <input type="radio" name="slide" id="signup" checked={!isLoginActive} readOnly />
          <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
          <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>Signup</label>
          <div className={`slider-tab ${isLoginActive ? "login" : "signup"}`}></div>
        </div>
        <div className="form-inner">
          {isLoginActive ? (
            <form className="login" onSubmit={handleLoginSubmit}>
              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="pass-link"><a href="#">Forgot password?</a></div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="#" onClick={handleSignupLinkClick}>Signup now</a>
              </div>
            </form>
          ) : (
            <form className="signup" onSubmit={handleSignupSubmit}>
              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
