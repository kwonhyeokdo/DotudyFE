import {createStore} from "redux";

const initState = {
    content1: []
};

const reducer = (state = count, action)=>{
    switch(action.type){
        case "SET":
            return action.payload;
        default:
            return state;
    }
};

const Store = createStore(reducer);
export default Store;