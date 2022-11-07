import { Container ,Box} from "@mui/system";
import React , {useContext,createContext} from "react";
import {Image} from '../App.js'

export default function CustomMeme(props){
    const meme=useContext(Image)
    // console.log(Image)
    return(
        <Box sx={{width:'vw'}}>
        <img src={meme} height='500px'></img>
        </Box>
    )
}