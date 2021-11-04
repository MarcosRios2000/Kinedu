import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from './styles';
import Divider from '@mui/material/Divider'
import {
    getSocial,
} from '../../actions'



export default function Social() {
    const phAreas = useSelector((state) => state.social)
    const classes = useStyles();
    const dispatch = useDispatch();
   
   
    useEffect(() => {
    dispatch(getSocial());
    console.log(phAreas)
  }, [dispatch]);



    return(
        <div>
        <div className={classes.container} >
        <div className={classes.titleAreas}>Areas</div>
        <ButtonGroup aria-label="outlined primary button group">
            <Button sx={{
        position: 'absolute',
        width: '152px',
        height: '40px',
        textTransform: 'none',
        left: 'calc(50% - 152px/2 + 76px)',
        top: '74px',
        border: '1px solid #FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '0px 20px 20px 0px',
        fontFamily: 'Proxima Nova',
        background: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '13px',
        lineHeight: '17px',
        color:"#D43571",
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        "&:hover": {
            //you want this to be the same as the backgroundColor above 
            backgroundColor: "#FFF",  
            border: '#FFF !important' 
            }
  }}>Social & Emotional</Button>
  <Button component={RouterLink} to='/' sx={{
        position: 'absolute',
        width: '152px',
        height:' 40px',
        left: 'calc(50% - 152px/2 - 76px)',
        border: '1px solid #FFFFFF',
        top: '74px',
        fontSize: '13px',
        fontFamily: 'proxima nova', 
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: '20px 0px 0px 20px',
        color: "#FFFFFF",
        
        
        }}>Physical</Button>
        </ButtonGroup>
        <Divider sx = {{
        position: 'absolute',
        width: '468px',
        height: '0,5px',
        left: 'calc(50% - 468px/2)',
        top: '134px',
        // border: '1px solid #FFFFFF',
        background: '#FFFFFF'
        }}/>
        <div className={classes.skill}>Skill: {phAreas && phAreas.title}</div>
        <div className={classes.des}>
        {phAreas && phAreas.description}
        </div>
        </div>

        </div>
    )
}