import { combineReducers } from "redux";
import authsReducer from "./auths/authsReducer";
import alertsReducer from "./alerts/alertsReducer";

export default combineReducers({
  auths: authsReducer,
  alerts: alertsReducer
});
