import React, { useState } from 'react';
import './login.css'; // Importing CSS file
import { login, signup } from '../../firebase';

const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        if (signState === "Sign Up") {
            await signup(name, email, password);
        } else {
            await login(email, password);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">{signState}</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                {signState === "Sign Up" && (
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your name"
                        className="input-field"
                    />
                )}
                <input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                />
                <input 
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-btn">
                    {signState}
                </button>
            </form>

            <div className="form-switch">
                {signState === 'Sign In' ? (
                    <p>
                        Don't have an account?{" "}
                        <span className="switch-link" onClick={() => setSignState("Sign Up")}>Sign Up</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span className="switch-link" onClick={() => setSignState("Sign In")}>Sign In</span>
                    </p>
                )}
            </div>
        </div>
    );
}

export default Login;
