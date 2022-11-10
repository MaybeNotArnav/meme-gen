import React, { useContext ,useState,useEffect} from "react";
import { Template } from "../App";
import { Link ,Outlet} from "react-router-dom";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

export default function MemeNav(props){
// Pagination functions and state
const[page,setPage]=useState(1)
const handlePage=(e,p)=>{
    setPage(p)
}

function pageDisplay(){
    let perPage= (page-1)*10
    let test = []
    for(let i=perPage;i<(page*10);i++)
    {
        test.push(allMemesImg[i])
    }
    return test
} 
//Mapping of all meme objects
const allMemesImg = props.list.map(meme=>{
    return (
        <div className='meme' key={meme.id}>
        <Link to={`test`}>
            <img id={meme.id}src={meme.url} className='meme--image' onClick={getMemes} ></img>
        </Link>
    </div>)
    })
    
    
//Template choice
function getMemes(event){
    console.log(event.target.id)
    props.handleId(props.list.findIndex(item=>item.id===event.target.id))
    }

return(
    <Box className='MemeNav'sx={{
        height:'100%',
        width :'50%'
    }}>
    <div className='meme-list'>
    {pageDisplay()}
    </div> 
    <Pagination count={10} page={page} onChange={handlePage} variant='outlined' color="primary"></Pagination>
    </Box>

)
}