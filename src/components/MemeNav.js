import React, { useContext ,useState,useEffect} from "react";
import { Template } from "../App";

export default function MemeNav(props){
    const [id,setId]=useState(0)
    
    useEffect(()=>
    {
      props.temp(props.list[id])
    },[id])
    const allMemesImg = props.list.map(meme=>{
        return (
        <div className='meme' key={meme.id}>
            <img id={meme.id}src={meme.url} className='meme--image' onClick={getMemes} ></img>
        </div>)
        })

    function getMemes(event){
        console.log(event.target.id)
        // props.select(event.target.src)
        setId(props.list.findIndex(item=>item.id===event.target.id))
        }

    return(
        <section className='meme-list'>{allMemesImg}</section> 
    )
}