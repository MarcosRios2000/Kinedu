import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    container:{
        display: 'flex',
        // width: '386px',
        // height: '24px',
        // left: 'calc(50% - 386px/2 - 205px)',
        marginLeft: 'calc(50% - 386px/2 - 205px)',
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: 'normal',
        margin: '30px',
        
    }, 
    title: {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: 'normal', 
        color: '#657480'
    },
    age: {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: 'normal',  
        display: 'flex',
        color: '#8295A3',
        fontSize: '14px', 
    },
    btn: {
        position: 'absolute',
        left: 'calc(50% - 140px/2 + 328px)',
    },
});