import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem("userEmail", email);
        window.location.href = `http://localhost:3001/auth-success?email=${encodeURIComponent(email)}`;   
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-4">
          
          <h1 className="fs-2 mb-2 text-dark">Login to Finora</h1>
          <p className="text-muted small mb-4">Enter your email and password to access your terminal</p>
          
          <form onSubmit={handleLoginSubmit} className="text-start mx-auto">
            <div className="mb-3">
              <label className="text-muted medium mt-2 mb-1">Email address</label>
              <input type="email" className="form-control p-2" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            
            <div className="mb-4">
              <label className="text-muted medium mb-1">Password</label>
              <input type="password" className="form-control p-2" onChange={(e) => setPassword(e.target.value)} required />
            </div>

            {error && (
              <div className='alert alert-danger' role='alert'>
                {error}
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100 p-2 fw-medium">
              Continue
            </button>
          </form>

          <p className="text-muted small mt-4">
            Don't have an account? <a href="/signup" className="text-decoration-none">Sign up here</a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;