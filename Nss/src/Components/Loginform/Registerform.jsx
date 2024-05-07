import './Registerform.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";

const Registerform = () => {
    return(
        <div className="bg1">    
        <div className='title'>
            <span className='title-content1'>NOT ME,</span><br></br>
            <span className='title-content2'>BUT YOU...</span>
        </div>
        <div className='wrapper'>
            <form action=''>
                <h1>Register</h1>

                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Register Number' required />
                    <FaHashtag className='icon'/>
                </div>
                <div className='solitude'>
                        <input type="radio" id="option1" name='gender' />
                        <label htmlFor="option1">Male</label>

                        <input type="radio" id="option2" name='gender' />
                        <label htmlFor="option2">Female</label>

                        <input type="radio" id="option3" name='gender' />
                        <label htmlFor="option3">Other</label>
                    </div>   
                <div className='input-box'>
                    <input type='date' placeholder='D.O.B' required />
                </div>
                <div className='input-box'>
                    <input type='tel' placeholder='Phone no' required />
                    <FaPhone className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='email' placeholder='Email' required />
                    <MdEmail  className='icon'/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required />
                    <RiLockPasswordFill className='icon'/>
                </div>

                <button type='submit'>Register</button>

                <div className='reglink'>
                    <p>Have an account? <a href="/login">Login</a></p>
                </div>

            </form>

        </div>
        </div>
    );
};
export default Registerform;