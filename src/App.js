import './App.css';
import { Box,Switch} from "@mui/material";
// import Switch 
import axios from 'axios'
import { useState ,useEffect,createContext} from 'react';
import CustomMeme from './components/CustomMeme';
import MemeNav from './components/MemeNav';
import Text from './components/Text'
import { BrowserRouter,  Route, Routes,Outlet } from 'react-router-dom';
import TestForm from './components/TestForm';

export const Template= createContext()
export default function App() {
  const [memeObj,setMemeObj]=useState([])
  const [theme,setTheme]=useState({backgroundColor:'#FCFDF2'})
  const [template,setTemplate]=useState(undefined)
  const [id,setId]=useState(0)

  useEffect(()=>
    {
      if(memeObj[id])
      setTemplate(memeObj[id])
      else
      setTemplate({
        "id": "61579",
        "name": "One Does Not Simply",
        "url": "https://i.imgflip.com/1bij.jpg",
        "width": 568,
        "height": 335,
        "box_count": 2
    })
    },[id])
  
  useEffect(()=>{
    axios.get('https://api.imgflip.com/get_memes')
    
    .then((response) => {
      setMemeObj(response.data.data.memes)
    })
  },[])
  
  function handleChange(){
    const view = theme.backgroundColor==='#FCFDF2'?{backgroundColor:'#3B3486'}: {backgroundColor:'#FCFDF2'}
    setTheme(view)
  }

return (
  <Box className='App'sx={theme}>
  Darkmode
  <Switch onChange={handleChange} inputprops={{ 'aria-label': 'controlled' }}></Switch>
  {/* <MemeNav list={memeObj} temp={setTemplate} ></MemeNav> */}
  
  <BrowserRouter>
  <Template.Provider value={template}>

  <Routes>
  <Route path='/' element={<MemeNav list={memeObj} handleId={setId}/>}></Route>
  <Route path='/test' element={<><CustomMeme /><Text></Text></>}></Route>
  <Route path='/form' element={<TestForm></TestForm>}></Route>
  </Routes>

  <Outlet />
  </Template.Provider>
  </BrowserRouter>

  </Box>
);
}

// export default App;
