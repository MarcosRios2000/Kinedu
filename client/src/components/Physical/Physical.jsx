import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './styles';
import Divider from '@mui/material/Divider'
import Milestone from '../Milestone/Milestone'
import {
    getPhysical,
    getPhMilestones,
    getSocial,
    getSoMilestones,
} from '../../actions'



export default function Physical() {
    const btnPhOn = {
            position: 'absolute',
            width: '152px',
            height:' 40px',
            left: 'calc(50% - 152px/2 - 76px)',
            top: '74px',
            background: '#FFFFFF',
            border: '1px solid #FFFFFF',
            fontWeight: "bold",
            fontSize: '13px',
            fontFamily: 'proxima nova', 
            textTransform: 'none',
            // display: 'flex',
            // justifyContent: 'center',
            borderRadius: '20px 0px 0px 20px',
            color:"#1FADDF",
            "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#FFF", 
            border: '#FFF !important'   
            }
    }
    const btnPhOff = {
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
        
        
        }
    const btnSoOn = {
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
  }
    const btnSoOff = {
        position: 'absolute',
        width: '152px',
        height: '40px',
        left: 'calc(50% - 152px/2 + 76px)',
        top: '74px',
        border: '1px solid #FFFFFF',
        boxSizing: 'border-box',
        borderRadius: '0px 20px 20px 0px',
        fontFamily: 'proxima nova', 
        textTransform: 'none',
        fontSize: '13px',
        lineHeight: '17px',
        fontWeight: 'bold',
        color: '#FFFFFF',
  }
    const phAreas = useSelector((state) => state.physical)
    const soAreas = useSelector((state) => state.social)
    const phMilestones = useSelector((state) => state.phMilestone)
    const soMilestones = useSelector((state) => state.soMilestone)
    const classes = useStyles();
    const [styleArea, setStyleArea] = useState(classes.containerPh);
    const [styleBtnPh, setSstyleBtnPh] = useState(btnPhOn);
    const [styleBtnSo, setSstyleBtnSo] = useState(btnSoOff);
    const [area, setArea] = useState(phAreas);
    const [milestone, setMilestone] = useState(phMilestones);
    const dispatch = useDispatch();

    function handleClick1(e) {
        e.preventDefault();
        setStyleArea(classes.containerSo)
        setSstyleBtnSo(btnSoOn)
        setSstyleBtnPh(btnPhOff)
        setArea(soAreas)
        setMilestone(soMilestones)
      }

      function handleClick2(e) {
        e.preventDefault();
        setStyleArea(classes.containerPh)
        setSstyleBtnPh(btnPhOn)
        setSstyleBtnSo(btnSoOff)
        setArea(phAreas)
        setMilestone(phMilestones)
      }
   
    useEffect(() => {
    dispatch(getPhysical());
    dispatch(getSocial());
    dispatch(getPhMilestones());
    dispatch(getSoMilestones());
    console.log(phAreas)
  }, [dispatch, phAreas]);



    return(
        <div>
        <div className={styleArea}>
        <div className={classes.titleAreas}>Areas</div>
        <ButtonGroup aria-label="outlined primary button group">
            <Button onClick={(e) => handleClick2(e)} sx={styleBtnPh}>Physical</Button>
            <Button onClick={(e) => handleClick1(e)} sx={styleBtnSo}>Social & Emotional</Button>
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
        <div className={classes.skill}>Skill: {area.title}</div>
        <div className={classes.des}>
        {area.description}
        </div>
        </div>
        <div className={classes.milestones}>
        {milestone?.length > 0 ? (
            milestone?.map((e)=>{
                return (
                 <div key={e.id}>   
                    <Milestone 
                    title={e.title}
                    id={e.id}
                    age_range={area.age_range}
                    />
                </div>
                )
            })
        ) : (
            <div>   
               <CircularProgress style={{'color': '#1FADDF'}}/>
            </div>
        )
    }
        </div>
        </div>
    )
}