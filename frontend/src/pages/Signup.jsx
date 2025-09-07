import { useState, useEffect } from "react";
import Input from "../components/Input";
import { User, Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router";
import Floatingbg from "../components/Floatingbg";
import { useApiStore } from "../store/apistore";

const Signup = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isLoading = useApiStore((s) => s.isLoading);
  const error = useApiStore((s) => s.error);
  const setError = useApiStore((s) => s.setError);
  const signup = useApiStore((s) => s.signup);

  useEffect(() => {
    setError(null);
  },[])

  const handleLogin = async (e) => {
    e.preventDefault();
      try{
        await signup(email, password, userName);
        navigate("/home");
      } catch (err) {
        console.log(err);
      }
  }

    return (
      <div className="screen-center">
        <Floatingbg />
    <div className="auth-card">
      <div className="">
        <h2 className="auth-title">
            Create Account
        </h2>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-2 mt-4 px-8">
            <Input 
              Icon={ User }
              type="text"
              placeholder="FullName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input 
              Icon={ Mail }
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input 
              Icon={ Lock }
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          { error && <p className="text-red-500 text-sm mt-2">{error}</p> }
    
          <button type="submit" className="bg-violet-500 py-2 my-6 t rounded-full font-bold text-stone-50 hover:scale-105 hover:bg-violet-600 hover:text-white" >
            {isLoading ? <Loader className="animate-spin mx-auto" /> : "Signup" }
          </button>

        </form>
      </div>
        <div className="w-full p-4 bg-slate-700 flex justify-center items-center gap-2">
          <span className="text-sm text-gray-200">Already have an account?</span>
          <Link to="/login" className="text-sm hover:underline font-bold hover:text-blue-600">Login</Link>
        </div>
    </div>
    </div>
  )
}

export default Signup;