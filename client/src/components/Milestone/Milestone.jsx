import React from "react";
import { useStyles } from './styles';
import Button from '@mui/material/Button';
import { useState } from "react";
import {
    com,
    nAns,
    uCom
} from '../../Constants/ButtonStyles'

export default function Milestone({ title, age_range, id }) {
    
    const [status, setStatus] = useState("Not answered");
    const [style, setStyle] = useState(nAns);
    function handleClick(e) {
        e.preventDefault();
        if(status === "Not answered"){
            setStatus("Uncompleted") 
            setStyle(uCom)
        }
        if(status==="Uncompleted"){
            setStatus("Completed")
            setStyle(com)
        }
        if(status==="Completed"){
            setStatus("Not answered")
            setStyle(nAns)
        }
      }
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <div >
            <div className={classes.title} >
            {title && title} 
            </div>         
            <div className={classes.age}>Usually achieved by: {age_range && age_range}</div>
        </div>
        <div className={classes.btn}>
        <Button key={id} onClick={(e) => handleClick(e)} sx={style}>{status}</Button>
            </div>
      </div>
    );
  }