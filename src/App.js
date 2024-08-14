import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [isSignup, setIsSignup] = useState(false);


  return (

    <>
    <div className='flex w-full h-screen'>
      
      <div className={`w-full lg:w-1/2 flex items-center justify-center transition-transform duration-500 ${isSignup ? 'order-2' : 'order-1'}`}>
        {isSignup ? <Signup setIsSignup={setIsSignup} /> : <Login setIsSignup={setIsSignup} />}
      </div>

      <div className={`bg-gray-200 relative hidden lg:flex h-full w-1/2 items-center justify-center transition-all duration-500 ${isSignup ? 'order-1' : 'order-2'}`}>
        <div className={`relative transition-transform duration-500 ${isSignup ? 'transform translate-x-[5%]' : 'transform translate-x-0'}`}>
          <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin'></div>
        </div>
        <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'></div>
      </div>

    </div>
    </>

  );
}

export default App;

