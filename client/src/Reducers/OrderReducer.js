import { ORDER_CREATE ,ORDERS_FETCH } from '../Actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case ORDERS_FETCH :
            return action.payload;
            case ORDER_CREATE :
            return { saved : true, msg: "บันทึกสินค้าเรียบร้อย" };
        default:
            return state;
    }
}