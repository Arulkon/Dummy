import './Home.css';
import { GiBlackHandShield } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
const Home = () => {
    return(
        <div className="bg2">
            <div className='wrapper-homereal'>
                <form action="/login">
                <a className='Button2'> <button type='submit'><GiBlackHandShield />Volunteer</button></a>
                </form>
            </div>
            <div className='wrapper-homereal1'>
                <form action="/adlogin">
                <a className='Button2'> <button type='submit'><RiAdminFill />Admin</button></a>
                </form>

            </div>
        </div>
    );
};
export default Home;