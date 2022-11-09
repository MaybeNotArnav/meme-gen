import './App.css';
import { Container ,Box,Switch} from "@mui/material";
// import Switch 
import axios from 'axios'
import { useState ,useEffect,createContext} from 'react';
import CustomMeme from './components/CustomMeme';
import MemeNav from './components/MemeNav';
import Text from './components/Text'
import { BrowserRouter, Link, Route, Routes,Outlet } from 'react-router-dom';

export const Template= createContext()
export default function App() {
  const [memeObj,setMemeObj]=useState([])
  const [theme,setTheme]=useState({backgroundColor:'white'})
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
    const view = theme.backgroundColor==='white'?{backgroundColor:'rgb(16, 7, 66)'}:{backgroundColor:'white'}
    setTheme(view)
  }

  console.log(template)
return (
  <div className='App'>
  <Container maxwidth='md'sx={theme}>
  Darkmode
  <Switch onChange={handleChange} InputProps={{ 'aria-label': 'controlled' }}></Switch>
  {/* <MemeNav list={memeObj} temp={setTemplate} ></MemeNav> */}
  
  <BrowserRouter>
  <Template.Provider value={template}>

  <Routes>
  <Route path='/' element={<MemeNav list={memeObj} handleId={setId}/>}></Route>
  <Route path='/test' element={<><CustomMeme /><Text></Text></>}></Route>
  </Routes>

  <Outlet />
  </Template.Provider>
  </BrowserRouter>

  </Container>
  </div>
);
}

// export default App;
