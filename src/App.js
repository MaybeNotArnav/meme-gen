import './App.css';
import { Container ,Box,Switch} from "@mui/material";
// import Switch 
import axios from 'axios'
import { useState ,useEffect,createContext} from 'react';
import CustomMeme from './components/CustomMeme';
import MemeNav from './components/MemeNav';
import Text from './components/Text'

export const Image=createContext()
export const Template= createContext()
export default function App() {
  const [memeObj,setMemeObj]=useState([])
  const [customMeme,setCustomMeme]= useState('https://i.imgflip.com/26am.jpg')
  const [theme,setTheme]=useState({backgroundColor:'white'})

  useEffect(()=>{
    axios.get('https://api.imgflip.com/get_memes')
   
    .then((response) => {
      console.log(response.data.data)
      setMemeObj(response.data.data.memes)
    });
  },[])

 function handleChange(){
  const view = theme.backgroundColor==='white'?{backgroundColor:'rgb(16, 7, 66)'}:{backgroundColor:'white'}
  setTheme(view)
 }
 console.log(memeObj[0])
  return (
    <div className='App'>
    <Container maxwidth='md'sx={theme}>
    Darkmode
    <Switch
  // checked={checked}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
></Switch>
    <Template.Provider value={memeObj}>
    {/* Need to Link the template in image form and nav  */}
    <Text></Text>
    <Image.Provider value={customMeme}><CustomMeme/></Image.Provider>
    <MemeNav list={memeObj} select={setCustomMeme}></MemeNav>
    </Template.Provider>
    </Container>
    </div>
  );
}

// export default App;
