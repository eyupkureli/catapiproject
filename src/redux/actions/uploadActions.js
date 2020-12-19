import * as actionTypes from "./actionTypes";

export function uploadImage(imagecard) {
    return { type: actionTypes.UPLOAD_IMAGE, payload: imagecard}
}


