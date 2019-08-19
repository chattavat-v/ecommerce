import axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_UPDATE, PRODUCT_CREATE} from "./types";

export const productFetch = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/api/products/" + id).then(
            res => {
                dispatch({ type : PRODUCT_FETCH, payload : res.data});
            }
        )
    }
}

export const productsFetch = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/api/products").then(
            res => {
                dispatch({ type : PRODUCTS_FETCH, payload : res.data});
            }
        )
    }
}

export const productDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/api/products/" + id).then(res => {
            axios.get(process.env.REACT_APP_API_URL + "/api/products").then(
                res => {
                    dispatch({ type : PRODUCTS_FETCH, payload : res.data});
            });
        })
    }
}

export const productUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "/api/products/" + id, values).then(
            res => {
                dispatch({ type : PRODUCT_UPDATE});
        });
    }
}

export const productCreate = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/api/products", values).then(
            res => {
                dispatch({ type : PRODUCT_CREATE});
        });
    }
}