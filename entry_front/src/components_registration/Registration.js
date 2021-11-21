import { useState} from "react";


const Registration = (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegistration = () => {
        setError(null);
        setLoading(true);
    }


    return (
        <div>
            Registration <br /> <br />
            <div>
                Username<br/>
                <input
                    type = "text"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Email<br/>
                <input
                    type = "email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                Password<br/>
                <input
                    type = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                Confirm Password<br/>
                <input
                    type = "password"
                    value = {password}
                    onChange = {(e) => setConfirmPassword(e.target.value)}
                />
            </div><br />
            {error && <div className = "error">{error}</div>}
            <input
                type = "button"
                value = {loading ? "Loading..." : "Register"}
                disabled = {loading}
                onClick = {handleRegistration}
            />
        </div>
    )
}

export default Registration