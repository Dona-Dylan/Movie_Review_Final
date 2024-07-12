// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = ({ history }) => {
//     const [fullName, setFullName] = useState('');
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('${process.env.REACT_APP_SERVER_URL}/api/auth/signup', { fullName, username, email, password });
//             if (res.data.token) {
//                 localStorage.setItem('token', res.data.token); // Store token in local storage
//                 history.push('/'); // Redirect to home page or wherever after signup
//             } else {
//                 setError('Signup failed');
//             }
//         } catch (err) {
//             console.error(err);
//             setError('Signup failed');
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Full Name"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default Signup;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
            try { 
            const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/signup`, { fullName, username, email, password });
            if (res.data.token) {
                localStorage.setItem('token', res.data.token); // Store token in local storage
                navigate('/'); // Redirect to home page or wherever after signup
            } else {
                setError('Signup failed');
            }
        } catch (err) {
            console.error(err);
            setError('Signup failed');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" onClick={(e)=> handleSubmit(e)}>Signup</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Signup;
