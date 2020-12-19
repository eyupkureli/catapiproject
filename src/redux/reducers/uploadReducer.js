import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";



export default function uploadImageReducer(state = initialState.currentImage, action) {
    switch (action.type) {
        case actionTypes.UPLOAD_IMAGE:
            return action.payload
        default:
            return state;
    }
}