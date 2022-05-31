import {legacy_createStore as createStore, combineReducers} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
});

let store = createStore(reducers);


export default store;