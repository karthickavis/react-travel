import { useEffect, useState } from "react";
import "./loginstyle.css"
// import { useAuth } from '../../../Auth/authGuard';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./authentication/authGuard";

function LogIn () {
    const initialValues = {username : "" , email : "", password : ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const {login} = useAuth();
     const navigate = useNavigate();


    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value});
        setFormErrors(validate({...formValues,[name]:value}));
        setIsSubmit(false);
    };

    const handleSubmit = (e) =>{
       e.preventDefault();
       setFormErrors(validate(formValues));
       setIsSubmit(true);
       
      
 };
    
    useEffect(()=>{
    if(Object.keys(formErrors).length===0 && isSubmit){
      login(formValues);
       navigate("/home");
      setIsSubmit(false);
    }   
    },[formErrors,isSubmit,login,navigate,formValues]);
    const validate = (values) =>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.username){
        errors.username="Username is required!";
      }  
      if(!values.email){
        errors.email="Email is required!";
      } else if(!regex.test(values.email)){
        errors.email="Please enter a valid email!";
      }
      if(!values.password){
        errors.password="Password is required!";
      }  else if (values.password.length < 4){
        errors.password="Password must be more than 4 !";
      } else if(values.password.length > 10){
        errors.password= "password cannot exceed more than 10 characters";
      }
      return errors;
    };


    return(
       <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div className="ui divider"></div>
            <div className="ui-form">
                <div className="field">
                    {/* <label>Username</label> */}
                    <input type="text" placeholder="Username" name="username"  id="username" 
                    value={formValues.username}
                    onChange={handleChange}
                    />
                </div> 
                <p>{formErrors.username}</p>
                <div className="field">
                    {/* <label>Email</label> */}
                    <input type="text" 
                    placeholder="Email"
                  name="email"  id="email"
                    value={formValues.email}
                     onChange={handleChange}
                     />
                </div>
                <p>{formErrors.email}</p>
                <div className="field">
                    {/* <label>Password</label> */}
                    <input type="text" 
                    placeholder="Password"
                    name="password"  id="password" 
                    value={formValues.password}
                    onChange={handleChange}
                    />
                </div>
                <p>{formErrors.password}</p>
                <button>Submit</button>
            </div>
        </form>

       </div>
    )

}
export default LogIn;