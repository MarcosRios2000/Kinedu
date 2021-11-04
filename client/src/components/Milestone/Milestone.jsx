import React from "react";
import { useStyles } from './styles';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function Milestone({ title, age_range, id }) {
    
    const com = {
        background: '#78B742',
                borderRadius: '20px',
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                lineHeight: '19px',
                width: '140px',
                height: '40px',
                color: '#FFFFFF',
                "&:hover": {
                    //you want this to be the same as the backgroundColor above
                    backgroundColor: "#78B742",
    }
}
    const nAns = {
        background: '#FFFFFF',
                borderRadius: '20px',
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                lineHeight: '19px',
                width: '140px',
                height: '40px',
                color: '#9D9D9D',
                "&:hover": {
                    //you want this to be the same as the backgroundColor above
                    backgroundColor: "#FFFFFF",
    }
}
    const uCom = {
        background: '#FFFFFF',
                borderRadius: '20px',
                fontFamily: 'Proxima Nova',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '16px',
                textTransform: 'none',
                lineHeight: '19px',
                width: '140px',
                height: '40px',
                color: '#78B742',
                "&:hover": {
                    //you want this to be the same as the backgroundColor above
                    backgroundColor: "#FFFFFF",
    }
    }
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
        <div className={classes.title}>
            {title && title}          
            <div className={classes.age}>Usually achieved by: {age_range && age_range}</div>
        </div>
        <div className={classes.btn}>
        <Button key={id} onClick={(e) => handleClick(e)} sx={style}>{status}</Button>
            </div>
      </div>
    );
  }