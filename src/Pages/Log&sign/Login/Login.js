import React from 'react';
import logo from '../../../image-folder/logo2.png'
import { Button } from 'react-bootstrap';

import useAught from '../../../Hooks/Auth';

const Login = () => {
    const {user,GoogleSignIn,logOut,handelEmail,handelPassword,HandelRegistration}=useAught();
    return (
        <div expand="lg"   className="justify-content-center pb-5  mx-auto text-center pt-5 image" >
        <img style={{width:'300px',paddingTop:'30px'}} src={logo} alt="" />
      <div className=" m-4 ">
     
       <input onBlur={handelEmail} className="input"  type="email" placeholder="Enter your email" /><br />
      
       <input onBlur={handelPassword} className="input"  type="password" placeholder="Enter your password" /><br />
       <Button onClick={HandelRegistration} className="input" style={{width:"208px"}} variant="danger">Sign In</Button><br />
    {
      user.email?
      
      <Button onClick={logOut} className="input" style={{width:"208px"}} variant="danger">Log out </Button>
      : <Button onClick={GoogleSignIn} className="input" style={{width:"208px"}} variant="danger"> <i class="fab fa-google"></i> Sign with google </Button>
    }
       {/* <Button onClick={GoogleSignIn} className="input" style={{width:"208px"}} variant="danger"> <i class="fab fa-google"></i> Sign with google </Button> */}
       <h1>your email : {user.email}</h1>
{/*       
      <Button onClick={logOut} className="input" style={{width:"208px"}} variant="danger">Log out </Button> */}
     </div>
   </div>
    );
};

export default Login;