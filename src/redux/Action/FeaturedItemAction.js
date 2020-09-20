import Axios from "axios";
import { GET_FEATURED_ITEMS, SET_LOADING } from "./ACTIONTYPES";

export const getFeaturedItems = () => (dispatch) => {
  dispatch(setLoading());
  try{
    Axios.get("/api/v1/featured")
    .then((res) =>{
      dispatch({
        type: GET_FEATURED_ITEMS,
        payload: res.data,
      })}
    )
    .catch(err=>
        dispatch({
            type: GET_FEATURED_ITEMS,
            payload:[],
            error:true
          })
        );
  }catch(err){
    dispatch({
      type: GET_FEATURED_ITEMS,
      payload: [],
      error:true
    })
  }
};


export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
