import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';



const Login: React.FC = () => {
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            //It stores a key-value pair in the browser's localStorage.
            //The token is typically used to identify the user in subsequent API requests or to maintain a session.
            const res = await axios.post("http://localhost:5000/login", {username, password});
            localStorage.setItem("token", res.data.token); // Key: string, value: string
            alert("Login successful");
            navigate("/dashboard");
            // Browsers local 
        }
        catch(err: any) {
            alert(err.res?.data || "Login Failed")

        }
    };

    return (
      <form className="form-login" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
              Username:
              <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
          </label>
          <label>
              Password:
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </label>
          <button type="submit">Login</button>
      </form>
  );
  
};

export default Login;