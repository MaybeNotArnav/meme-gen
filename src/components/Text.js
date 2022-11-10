import { Button } from "@mui/material"
import axios from "axios"
import React, { useState ,useEffect,useContext} from "react"
import { Template } from "../App"

export default function Text(props){
const template = useContext(Template)
const [box,setBox]= useState([])
const [form,setForm]=useState([])
const [finMeme,setFinMeme]=useState()

useEffect(()=>{
    setBox([])
    setForm([])
    if(template!==undefined){  
        for(let i =0;i<template.box_count;i++){
            setBox((prevForm)=>[...prevForm,{'text':'placeholder'}])
            setForm((prevForm)=>[...prevForm,<input type='text' name={i} onChange={handleChange}></input>])
        }
    }
},[template])

console.log(box)
function handleChange(event){
    const target = parseInt(event.target.name)
    setBox((prevBox)=>{
        let newArr = [...prevBox]
        newArr[target] = {'text':event.target.value}
        return newArr})
}
// console.log(form)
function Test(){
axios.post('https://api.imgflip.com/caption_image',null,{params:{
    template_id: template.id,
    username: 'ArnavM',
    password: 'meme@2022',
    boxes : box
}},).then((response)=>setFinMeme(response.data.data.url))
}

    return(
        <div>
        <form method="POST" className="meme-form">
            {form}
            <Button variant='contained' onClick={Test}>Test</Button>
        </form>
        {finMeme &&<img src={finMeme}></img>}
        </div>
    )
}