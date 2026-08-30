import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await axios.post('https://finora-backend-na5s.onrender.com/signup', {
                username,
                email,
                password
            }, { withCredentials: true });

            if (response.status === 200 || response.status === 201) {
                if(response.data && response.data.token){
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    localStorage.setItem("isAuthenticated", "true");
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userEmail", email);
                }
                window.location.href = `https://finora-dashboard-df9l.onrender.com?auth=true&token=${response.data.token}`;
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container p-5 text-center mt-5" style={{ maxWidth: "420px", minHeight: "70vh" }}>
            <h1 className="mb-2 fs-2 fw-medium text-dark">Join Finora</h1>
            <p className="text-muted mb-4 fs-6">Open a free demat and trading account</p>
            
            <form onSubmit={handleSignup} className="text-start">
                <div className="mb-3">
                    <label className="form-label text-muted fs-7">Username</label>
                    <input 
                        type="text" 
                        className="form-control py-2 fs-6" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-muted fs-7">Email address</label>
                    <input 
                        type="email" 
                        className="form-control py-2 fs-6" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label text-muted fs-7">Password</label>
                    <input 
                        type="password" 
                        className="form-control py-2 fs-6" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2 fs-5 border-0" 
                    style={{ backgroundColor: "#387ed1" }}
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Continue"}
                </button>
            </form>

            {error && (
                <div className="alert alert-danger mt-3 py-2 fs-7 text-start" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
}

export default Signup;