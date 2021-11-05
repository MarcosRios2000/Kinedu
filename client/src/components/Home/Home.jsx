import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './styles';
import Divider from '@mui/material/Divider';
import SweetAlert from 'sweetalert2';
import Milestone from '../Milestone/Milestone';
import {
    btnPhOn,
    btnPhOff,
    btnSoOn,
    btnSoOff,
    nextBtn

} from '../../Constants/ButtonStyles'
import {
    getPhysical,
    getPhMilestones,
    getSocial,
    getSoMilestones,
} from '../../actions'



export default function Physical() {
   
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
        window.scrollTo(0, 0)
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
      function handleSubmit(e){
          e.preventDefault()
        SweetAlert.fire('Congratulations!');
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
  }, [dispatch]);



    return(
        <div>
        <div className={styleArea}>
            <div className="title">
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
        </div>

        <div className={classes.milestones}>
        {milestone?.length ? (
            milestone?.map((e)=>{
                return (
                 <div key={e.id}>   
                    <Milestone 
                    title={e.title}
                    id={e.id}
                    age_range={area.age_range}
                    areaId={e.areaId}
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
        {area=== phAreas ? 
        <div><Button sx={nextBtn} onClick={(e) => handleClick1(e)}>Next</Button></div> :
         <div><Button sx={nextBtn} onClick={(e) => handleSubmit(e)}>Finish assessment</Button></div>
        }
        </div>
        </div>
    )
}