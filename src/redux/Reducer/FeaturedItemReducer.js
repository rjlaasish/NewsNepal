const { GET_FEATURED_ITEMS, SET_LOADING } = require("../Action/ACTIONTYPES");

const initialState = {
  data: [],
  loading: false,
  error:""
};

 const FeaturedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_ITEMS:
      return {
          ...state,
          data:action.payload,
          loading:false,
          error:action.error
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
  }
};

export  default FeaturedItemReducer;

