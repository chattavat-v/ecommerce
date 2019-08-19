import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE } from '../Actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case PRODUCT_FETCH :
        case PRODUCTS_FETCH :
            return action.payload;
        case PRODUCT_CREATE :
            return { saved : true, msg: "บันทึกสินค้าเรียบร้อย" };
        case PRODUCT_UPDATE :
            return { ...state, saved : true, msg: "บันทึกสินค้าเรียบร้อย" };
        default:
            return state;
    }
}