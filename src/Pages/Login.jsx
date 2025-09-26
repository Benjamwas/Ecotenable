import { useState } from 'react';
import axios from 'axios'
import dashboard from '../Components/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [error, setError] = useState('')

  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    console.log('Logging in:', { email, password, remember });
  
    try {
      // Send a POST request to the login API
      const res = await axios.post(
        'https://api.ecotenable.com/api/auth/login', // Corrected URL
        { email, password },
        { withCredentials: true }
      );
  
      // Handle successful login
      if (res.status === 200) {
        console.log('Login successful:', res.data);

        // Redirect to the dashboard
        navigate('/dashboard'); // Corrected navigation
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Display server error message
      } else {
        setError('Something went wrong. Please try again!');
      }
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setError(''); // clears out previous error

    try{
        // sends a POST request to the backend API with the user's email and pwd
        const res= await axios.post(
            'https://api.ecotenable.com/api/auth/register', // sign up api endpoint
            {email:signUpEmail, password:signUpPassword}, // data sent in the req body
            {withCredentials:true}); // ensures cookies are sent with the request

        console.log(res.data);// Logs the response from the server
    } catch (err) {
        // handles errors that occur during the api request
        if(err.response && err.response.data && err.response.data.error) {
             // If the server responds with an error message, display it.
            setError(err.response.data.error);
        }else {
             // If no specific error message is provided, display a generic error.
            setError("Something went wrong, Please try again.")
        }
    }

    console.log('Signing up:', { signUpEmail, signUpPassword });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-[#2a1d61] rounded-3xl shadow-2xl flex flex-col md:flex-row"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-white p-8 md:p-10 flex flex-col justify-center">
          <div className="mb-8 md:mb-10">
            <div className="text-2xl md:text-3xl font-bold mb-2">Ecotenable</div>
            <div className="text-sm">Green Energy Starts Here</div>
          </div>
          <div className="text-base md:text-lg mb-6">
            You will be experiencing Digital Climate Expertise: <span className="font-semibold">Ecotenable</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-transparent border border-white py-2 px-4 rounded-xl text-sm hover:bg-white hover:text-purple-900 transition">
              What to Expect?
            </button>
            <button className="bg-transparent border border-white py-2 px-4 rounded-xl text-sm hover:bg-white hover:text-purple-900 transition">
              Other Future Applications
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#3f2e85] rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-8 md:p-10 text-white">
          {!showSignUp ? (
            <>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Log In to Ecotenable</h2>
              <form onSubmit={handleLogin}>
                <label className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 mb-4 rounded-xl bg-[#2f236d] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <label className="block text-sm mb-2">Your Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 mb-4 rounded-xl bg-[#2f236d] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    Remember
                  </label>
                  <a href="#" className="text-sm text-blue-300 hover:underline">Forgotten?</a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-300 text-purple-900 py-2 rounded-xl font-semibold hover:bg-blue-200 transition"
                >
                  Log In
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Create Your Account</h2>
              <form onSubmit={handleSignUpSubmit}>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                  className="w-full p-3 mb-4 rounded-xl bg-[#2f236d] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <label className="block text-sm mb-2">Password</label>
                <input
                  type="password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                  className="w-full p-3 mb-4 rounded-xl bg-[#2f236d] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-300 text-purple-900 py-2 rounded-xl font-semibold hover:bg-blue-200 transition"
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-6 text-center text-sm">
                Already have an account?
                <button
                  onClick={() => setShowSignUp(false)}
                  className="ml-2 border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-purple-900 transition"
                >
                  Back to Login
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}