import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function LogIn() {
    const [firestName , setFirestName]= React.useState("")
    const [ pass , setPass ] = React.useState<any>()
const navigate = useNavigate()

    const getInfo = ()=>{
if(firestName.length >=3 && pass.length >=3){
localStorage.setItem("firestName" ,firestName)
navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
  return (
    <Box bg={"#F0FFF4"} 
fontSize="30px" 
>
    <div className='logIn-form'>
    <Box boxSize='sm'>
  <Image src='https://upload.wikimedia.org/wikipedia/ar/7/70/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D8%AA%D8%A3%D8%B3%D9%8A%D8%B3_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A_.svg' alt='Dan Abramov' />
</Box>

   <fieldset className='logIn-fieldset'>  
       تسجيل دخول  
<input placeholder='First Name' onChange={e =>{setFirestName(e.target.value)}} ></input>
<input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
<button type='submit' onClick={getInfo}> دخول</button>

</fieldset> 

    </div>
    </Box>
  )
}

export default LogIn