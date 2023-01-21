import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jwt-auth-one.vercel.app/login', {
        username,
        password,
      });
      // if (!response.data.error) {
      //   return navigate('/product');
      // }
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center min-vw-100">
      <div className="form-signin w-25  m-auto">
        <form onSubmit={handleSubmit} className="border-1 border-dark d-flex flex-column gap-2">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="text" className="form-control" placeholder="name@example.com" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
