import React from "react";
import { useStyles } from './styles';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    com,
    nAns,
    uCom
} from '../../Constants/ButtonStyles'
import {
    milestoneStatus
} from '../../actions/index'

export default function Milestone({ title, age_range, id, areaId }) {
    const dispatch = useDispatch();
    
    const milestoneState = useSelector((state) => state.milestoneStatus)
    const [status, setStatus] = useState(milestoneState[id] || "Not answered");
    const [style, setStyle] = useState(nAns);
    function handleClick(e, id, areaId) {
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


      useEffect(() => {
        dispatch(milestoneStatus(id, status, areaId));
      }, [status]);


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
        <Button key={id} onClick={(e) => handleClick(e, id, areaId)} sx={style}>{status}</Button>
            </div>
      </div>
    );
  }