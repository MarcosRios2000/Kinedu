import axios from "axios";

export function getPhysical() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/area/23", {});
    return dispatch({
      type: "GET_PHYSICAL",
      payload: json.data,
    });
  };
}

export function getSocial() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/area/2", {});
    return dispatch({
      type: "GET_SOCIAL",
      payload: json.data,
    });
  }; 
}

  export function getPhMilestones() {
    return async function (dispatch) {
      const json = await axios.get("http://localhost:3001/milestone/23", {});
      return dispatch({
        type: "GET_PH_MILESTONE",
        payload: json.data,
      });
    };
}

export function getSoMilestones() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/milestone/2", {});
    return dispatch({
      type: "GET_SO_MILESTONE",
      payload: json.data,
    });
  };
}