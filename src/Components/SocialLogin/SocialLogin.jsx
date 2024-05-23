
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../useMenu/useAuth/useAuth';
import useAxiosPublic from '../../useMenu/useAxiosPublic/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  
  const {googleSignIn} = useAuth();
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()


  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(res => {
      console.log(res.user);
      const userInfo ={
        email: res.user?.email,
        name: res.user?.displayName
      } 

      axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res);
        navigate('/')
        
      })

    })
  }

  return (
    <div>
    
      <div className=" text-black m-4">
    <button onClick={handleGoogleSignIn} className="btn btn-outline w-full uppercase">
       <FaGoogle className="uppercase"></FaGoogle>sign in with Google
     </button>
    </div>
    </div>
  );
};

export default SocialLogin;