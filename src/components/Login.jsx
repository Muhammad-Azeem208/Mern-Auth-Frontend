import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {setIsAuthenticated, setUser} = useContext(Context);
  const navigateTo = useNavigate();

  const {register, handleSubmit, formState: {errors} } = useForm();
  const login = async (data)=>{
    await axios.post("http://localhost:4000/api/v1/user/login", data, {
      withCredentials: true,
      headers:{
        "Content-Type": "application/json"
      },
    }).then((res)=>{
      toast.success(res.data.message);
      setIsAuthenticated(true);
      setUser(res.data.user);
      navigateTo("/");
    }).catch((error)=>{
      toast.error(error.response.data.message);
    })
  }
  return <>
  <form className="auth-form" onSubmit={handleSubmit((data)=> login(data))}>
    <h2>Login</h2>
    <input type="email" placeholder="Email" required {...register("email")} />
    <input type="password" placeholder="Password" required {...register("password")} />
    <p className="forgot=password">
      <Link to={"/password/forgot"}>Forgot Password</Link>
      <button type="submit">Login</button>
    </p>
  </form>
  </>;
};

export default Login;
