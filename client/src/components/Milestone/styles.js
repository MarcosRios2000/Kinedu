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
    }, 
    age: {
        fontFamily: 'Proxima Nova',
        fontStyle: 'normal',
        fontWeight: 'normal',   
    },
    btn: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
});