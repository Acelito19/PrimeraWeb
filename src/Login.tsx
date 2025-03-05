import { useState } from "react";
import "./styles.css";

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-image"></div>
                <div className="login-form">
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="login-links">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                            <a href="#">Registrarse</a>
                        </div>
                        <button type="submit" className="login-button">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
