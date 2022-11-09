import { Container ,Box} from "@mui/system";
import React , {useContext} from "react";
import {Template} from '../App.js'

export default function CustomMeme(props){
    const temp = useContext(Template)
    console.log('rendered')
    return(
        <Box sx={{width:'vw'}}>
        {temp && <img src={temp.url} height='500px'></img>}
        </Box>
    )
}