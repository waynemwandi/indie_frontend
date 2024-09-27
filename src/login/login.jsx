import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css';

const Login = () => {
  
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate= useNavigate();
  
  
  // Session timeout for inactivity
  
  const totalSessionTime = 1000 * 60 * 60 * 12; // 12 hours

  const [timer, setTimer] = useState(null);


  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    navigate('/');
    console.log("Logged out successfully.");
  }, [navigate]);


  

  const resetTimer = useCallback(() => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
        alert("You have been logged out due to inactivity.");
        logout();
    }, totalSessionTime);

    // Set up warnings
    setTimeout(() => alert("You have 1 hour remaining before being logged out due to inactivity."), totalSessionTime - 1000 * 60 * 60);

    return newTimer;
}, [logout, totalSessionTime, timer]); // Dependency on the timer state



    useEffect(() => {
        const handleActivity = () => {
            setTimer(resetTimer());
        };

        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keypress', handleActivity);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keypress', handleActivity);
            clearTimeout(timer);
        };
    }, [resetTimer, timer]);


const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event)  => {
  setPassword(event.target.value);
};
const handleconfirmPasswordChange = (event)  => {
  setConfirmPassword(event.target.value);
};

const handleFirstNameChange = (event) => {
  setFirstName(event.target.value);
}; 
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };


const handleSubmit = async (event) => {
  event.preventDefault();
  setErrorMessage(""); 
  if (action === "Login") {
      handleLogin();
  } else {
      handleSignup();
  }
};


const handleLogin = async () => {
  
  try {
    const response = await fetch("https://indie-userauth.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok)  
{
      throw new Error("Login failed");
    }

    const data = await response.json(); 
      localStorage.setItem('authToken', data.token); // Store the token or similar
      navigate('/members');
  } catch (error) {
    setErrorMessage("Login failed. Please check your email and password.");
  }
};

const handleSignup = async () => {
  
  if (!email.includes('@') || password.length < 8 || password !== confirmPassword) {
    setErrorMessage('Please check your inputs.');
    return;
  }


  try {
    const response = await fetch("https://indie-userauth.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstName, lastName, confirmPassword }), 
    });

    if (!response.ok) {
      const errorData = await response.json(); // Attempt to parse error response
      throw new Error(`Signup failed: ${errorData.message}`); 
    }

    
    console.log("Signup successful. Please login to continue.");
     
      setAction("Login"); 
      setEmail(''); 
      setPassword(''); 
      setFirstName(''); 
      setLastName(''); 

      
      setErrorMessage("Signup successful, please login.");
  } catch (error) {
    setErrorMessage("Signup failed. Please try again.");
  }
};



  return (

      <>
          <div className="container">
          <div className="header">
              <div className="text">{action}</div>
          </div>
          <form className="inputs" onSubmit={handleSubmit}>
              
          {action === "Sign Up" && (
              <>
              <div className="input">
                  <input type="text" 
                  placeholder="First Name: John" 
                  value={firstName} 
                  onChange={handleFirstNameChange} />
              </div>
              <div className="input">
                  <input type="text" 
                  placeholder="Last Name: Doe" 
                  value={lastName} 
                  onChange={handleLastNameChange} />
              </div>
          </>
              
              )}
              

              <div className="input">
                  <input
                      type="email"
                      placeholder="Email: user@gmail.com"
                      value={email}
                      onChange={handleEmailChange}
                  />
              </div>

              <div className="input">
                  <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                  />
              </div>

              {action === "Sign Up" && (
                  <div className="input">
            <input type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleconfirmPasswordChange} />
              </div>
              )}

              {action === "Login" && (
                
                  <div className="forgot-password">
                    <a href ="/passwordreset" >Forgot Password?</a>
                    </div>
              )}


              {errorMessage && <div className="error-message">{errorMessage}</div>}


 <div className="login-signup">
    {action === "Login" ? (
        <>
            <button type="submit" className="button-login">Login</button>
            <button
                type="button"
                className="button-switch"
                onClick={() => setAction("Sign Up")}
            >
                Sign Up
            </button>
        </>
    ) : (
        <>
            <button type="submit" className="button-login">Sign Up</button>
            <button
                type="button"
                className="button-switch"
                onClick={() => setAction("Login")}
            >
                Login
            </button>
        </>
    )}
</div>

          </form>
      </div>
      
      </>
  );
}

export default Login;
