import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
  containerPh: {
    position: "absolute",
    width: "960px",
    height: "316px",
    left: "calc(50% - 960px/2)",
    top: "0px",
    background: "#1FADDF",
    borderRadius: "4px 4px 0px 0px"
  },
  containerSo: {
    position: "absolute",
    width: "960px",
    height: "316px",
    left: "calc(50% - 960px/2)",
    top: "0px",
    background: "#D43571",
    borderRadius: "4px 4px 0px 0px"
  },
  titleAreas: {
    //position: "absolute",
    //width: "140px",
    // height: "24px",
      // left: "calc(50%)",
     marginTop: "30px",

    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
    /* or 130% */
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: "proxima nova",
  },
  des:{
    position: 'absolute',
    width: '796px',
    height: '72px',
    left: 'calc(50% - 796px/2)',
    top: '203px',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '18px',
    /* or 129% */
    textAlign: 'center',
    color: '#FFFFFF',
  },
  skill:{
    marginTop: '83px',
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '26px',
    /* or 108% */
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  milestones:{
    overflowY: 'scroll',
    marginTop: '356px',
  },
//   sx:{
//     position: 'absolute',
//     width: '152px',
//     height:' 40px',
//     left: 'calc(50% - 152px/2 - 76px)',
//     top: '74px',
//     background: '#FFFFFF',
//     borderRadius: '20px 0px 0px 20px',
//   }
});