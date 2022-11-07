import { Button } from "@mui/material"
import axios from "axios"
import React from "react"

export default function Text(props){
function handleChange(event){
    return(
        console.log(event.target.value)
    )
}
function Test(){
axios.post('https://api.imgflip.com/caption_image',null,{params:{
    template_id: "61579",
    username: 'sad',
    password: 'sd',
    text0: 'Me when the',
    text1: 'Me when the'
}},).then((response)=>console.log(response))
}

    return(
        <form method="POST">
            <input type="text" name='first' onChange={handleChange}></input>
            <input type="text" name ='second' onChange={handleChange}></input>
            {/* <input type='submit' ></input> */}
            <Button variant='contained' onClick={Test}>Test</Button>
        </form>
    )
}