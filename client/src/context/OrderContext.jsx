import { useReducer, createContext, useMemo } from "react";
import moment from "moment";
export const OrderContext = createContext();

export const ACTIONS = {
    changeUName: "change_username",
    changeUAddress: "change_useraddress",
    changeSOName: "change_soname",
    changeSOAddress: "change_soaddress",
    changePayMethod: "change_paymethod",
    changeSchedule: "change_schedule",
    changeForADate: "change_foradate",
};

const initialState = {
    userName: "@user",
    userAddress: "Somewhere",
    forADate: null,
    sOName: "@SO",
    sOAddress: "Somewhere else",
    paymentMethod: "",
    schedule: ""
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.changeForADate:
            return {
                ...state,
                forADate: action.payload
            }
        case ACTIONS.changeUName:
            return {
                ...state,
                userName: action.payload
            }
        case ACTIONS.changeUAddress:
            return {
                ...state,
                userAddress: action.payload
            }
        case ACTIONS.changeSOName:
            return {
                ...state,
                sOName: action.payload
            }
        case ACTIONS.changeSOAddress:
            return {
                ...state,
                sOAddress: action.payload
            }
        case ACTIONS.changePayMethod:
            return {
                ...state,
                paymentMethod: action.payload
            }
        case ACTIONS.changeSchedule:
            return {
                ...state,
                schedule: action.payload
            }
        default:
            return state;
    }
}

export const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const orderValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    return (
        <OrderContext.Provider value={orderValue}>
            {children}
        </OrderContext.Provider>
    );
};