import axios from 'axios';
import { ORDERS_FETCH, ORDER_CREATE } from './types';

export const ordersFetch = () => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/api/orders").then(
            res => {
                dispatch({ type : ORDERS_FETCH, payload : res.data });
            }
        )
    }
}

export const ordersDelete = order => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/api/orders/" + order._id ).then(res => {
            axios.get(process.env.REACT_APP_API_URL + "/api/orders").then(
                res => {
                    dispatch({ type : ORDERS_FETCH, payload : res.data});
                }
            )
        })
    }
}

export const orderCreate = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/api/orders", values).then(
            res => {
                dispatch({ type : ORDER_CREATE});
        });
    }
}