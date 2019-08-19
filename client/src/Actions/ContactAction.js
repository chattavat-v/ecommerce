import axios from "axios";
import { CONTACT_CREATE } from "./types";

export const contactCreate = values => {
	let msgDate = new Date();
	return dispatch => {
		axios.post(process.env.REACT_APP_API_URL + "/api/contact", {...values, msgDate}).then(
		res => {
			dispatch({ type : CONTACT_CREATE });
		});
	}
}