import {
  GET_PHYSICAL,
  GET_SOCIAL,
  GET_PH_MILESTONE,
  GET_SO_MILESTONE,
  MILESTONE_STATUS,
} from '../Constants/Reducer'

const initialState = {
  physical: [],
  social:[],
  phMilestone:[],
  soMilestone: [],
  milestoneStatus: {},
};


function rootReducer (state = initialState, action){
 switch (action.type) {
    case GET_PHYSICAL:
      return {
        ...state,
        physical: action.payload,
      };
    case GET_SOCIAL:
      return {
        ...state,
        social: action.payload,
      };
    case GET_PH_MILESTONE:
      return {
        ...state,
        phMilestone: action.payload
      };
    case GET_SO_MILESTONE:
      return {
        ...state, 
        soMilestone: action.payload
      };
    case MILESTONE_STATUS:
      return {
        ...state,
        milestoneStatus: {...state.milestoneStatus, [action.id]:action.payload, [action.areaId]:action.payload}
      }
    default:
      return state;
}
}


export default rootReducer