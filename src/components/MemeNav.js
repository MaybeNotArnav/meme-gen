import React, { useContext } from "react";

export default function MemeNav(props){
    // console.log(props)
    const allMemesImg = props.list.map(meme=>{
        return (
        <div className='meme' key={meme.id}>
            <img  src={meme.url} className='meme--image' onClick={getMemes} ></img>
        </div>)
        })

    function getMemes(event){
        console.log(event.target.src)
        props.select(event.target.src)
        }

    return(
        <section className='meme-list'>{allMemesImg}</section> 
    )
}