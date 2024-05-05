import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Signin() {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: null,
    password: null,
  });
  const { email, password } = formData;
  const Change = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <section className="bg-slate-100">
      <h1 className="text-3xl font-bold text-center pt-6">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] md:mb-6 mb-12">
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form onSubmit={onSubmit}>
            <input
              className="w-full px-4 py-2 text-xl rounded transition ease-in-out"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={Change}
            />
            <input
              className="w-full px-4 py-2 text-xl rounded transition ease-in-out mt-5"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={Change}
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-sm mt-3 ml-44 transition ease-linear">Sign in</button>
        <p className="font-semibold text-center my-2">OR</p>
        <OAuth/>
          </form>
          
          <div className="flex justify-between mt-10"><p>Don&apos;t have an Account? <Link to={'/signup'} className="text-blue-600 font-semibold">Sign Up</Link></p>
          <p><Link to={'/forgot-password'} className="text-blue-600 font-semibold">Forgot Password?</Link></p></div>
          
        </div>

      </div>
    </section>
  );
}
