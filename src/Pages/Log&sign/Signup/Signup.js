
import { Link } from 'react-router-dom';

import useAught from '../../../Hooks/Auth';
import logo from '../../../image-folder/logo2.png';
import './signup.css'

const Signup = () => {
    const {user,handelEmail,handelPassword,HandelRegistration}=useAught()

    return (
        <div expand="lg"   className="justify-content-center  mx-auto text-center pt-5 image" >
             <img className="img" style={{width:'300px',paddingTop:'30px',height:"auto-fit"}} src={logo} alt="" />
           <div className=" m-4 ">

         <form onSubmit={HandelRegistration}>
         <input className="input" type="text" placeholder="Name" /><br />
            <input onBlur={handelEmail} className="input"  type="email" placeholder="Type email" required /><br />
            <input onBlur={handelPassword}  className="input" type="password" placeholder="Type your password" required/><br />
            <input className="input"  type="password" placeholder="Conform password" /><br />
            <input style={{backgroundColor:'tomato',color:'white',border:'none',height:"49px",padding:'10px',borderRadius:"10px"}} type="submit" value="Create  Restaurant account" />
         </form>
           </div>
           <h1>email:{user.email}</h1>
           <h6 style={{color:'red'}}><Link to='/login'>All ready have an account  </Link></h6>
        </div>
    );
};

export default Signup;