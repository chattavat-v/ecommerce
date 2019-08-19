import { CONTACT_CREATE } from '../Actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case CONTACT_CREATE :
			return { saved : true, msg: "GrowElectronics ^^ ขอบคุณลูกค้าที่ใช้บริการ" };
		default:
			return state;
	}
}