import { useReducer, useContext, createContext, useMemo } from "react";
import { UserContext } from "./UserContext";
export const OrderContext = createContext();

export const ACTIONS = {
    changeAllUser: "change_alluser",
    changeUName: "change_username",
    changeUAddress: "change_useraddress",
    changeSOEmail: "change_soemail",
    changeSOName: "change_soname",
    changeSOAddress: "change_soaddress",
    changePayMethod: "change_paymethod",
    changeSchedule: "change_schedule",
    changeForADate: "change_foradate",
    initCart: "init_cart",
    addToCart: "add_to_cart",
    removeFromCart: "remove_from_cart",
    clearCart: "clear_cart",
    addQuantity: "add_quantity",
    minusQuantity: "minus_quantity",
    computeSubtotal: "compute_subtotal"
};



function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.changeAllUser:
            return {
                ...state,
                forADate: action.payload.forADate,
                userName: action.payload.userName,
                userAddress: action.payload.userAddress,
                sOEmail: action.payload.sOEmail,
                sOName: action.payload.sOName,
                sOAddress: action.payload.sOAddress,
                paymentMethod: action.payload.paymentMethod,
                schedule: action.payload.schedule
            }
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
        case ACTIONS.changeSOEmail:
            return {
                ...state,
                sOEmail: action.payload
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
        case ACTIONS.initCart:
            return {
                ...state,
                items: action.payload
            }
        case ACTIONS.addToCart:
            if (action.payload === "" || state.items.some(item => item.name === action.payload.name)) return state;
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case ACTIONS.removeFromCart:
            return {
                ...state,
                items: state.items.filter(item => item.name !== action.payload.name)
            }
        case ACTIONS.clearCart:
            return {
                ...state,
                items: []
            }
        case ACTIONS.addQuantity:
            // console.log(action.payload);
            state.items.map(item => { if (item.name === action.payload.name) item.quantity++ });

            return {
                ...state,
                items: state.items
            }
        case ACTIONS.minusQuantity:
            state.items.map(item => { if (item.name === action.payload.name) item.quantity > 1 ? item.quantity-- : item.quantity });

            return {
                ...state,
                items: state.items
            }
        case ACTIONS.computeSubtotal:
            state.items.map((item) => { if (item.name === action.payload.name) item.subtotal = item.quantity * item.price })

            return {
                ...state,
                items: state.items
            }
        default:
            return state;
    }
}

export const OrderProvider = ({ children }) => {
    const user = useContext(UserContext);

    const initialState = {
        userName:  user.userInfo[0] ? user.userInfo[0].first_name : "@user",
        userAddress: user.userInfo[0] ? user.userInfo[0].address : "@address",
        forADate: null,
        sOEmail: "@SOEmail",
        sOName: "@SO",
        sOAddress: "Somewhere else",
        paymentMethod: "COD",
        schedule: "",
        items: [],
    };

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