import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import FeaturedItemReducer from "./Reducer/FeaturedItemReducer";



const store = createStore( FeaturedItemReducer, compose(
    applyMiddleware( thunkMiddleware ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;