import { Box, Image } from '@chakra-ui/react';
import React from 'react'

import { useNavigate } from "react-router-dom";

function InterFace() {

    const navigate = useNavigate()


    const LogIn =()=>{
        navigate("/logIn")  
       
    }
  return (
<Box bg={"#F0FFF4"} 
fontSize="30px" 
>
    <div className='main'>
    <Box boxSize='sm'>
  <Image src='https://upload.wikimedia.org/wikipedia/ar/7/70/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A_.svg' alt='Dan Abramov' />
</Box>

        <h3 className='text'>مالحد منة، الله اللي عزنا</h3>
        <div className='btn'>
        <button> تسجيل جديد</button>  
          
        <button onClick={LogIn}>تسجيل دخول</button>

        </div>
      
    </div>
    </Box>
  )
}

export default InterFace