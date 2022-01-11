import { useReducer, createContext, useMemo } from "react";
export const OrderContext = createContext();

export const ACTIONS = {
    changeUName: "change_username",
    changeUAddress: "change_useraddress",
    changeSOName: "change_soname",
    changeSOAddress: "change_soaddress",
    changePayMethod: "change_paymethod",
    changeSchedule: "change_schedule",
    changeForADate: "change_foradate",
    addToCart: "add_to_cart",
    removeFromCart: "remove_from_cart",
    addQuantity: "add_quantity",
    minusQuantity: "minus_quantity"
};

const initialState = {
    userName: "@user",
    userAddress: "Somewhere",
    forADate: null,
    sOName: "@SO",
    sOAddress: "Somewhere else",
    paymentMethod: "",
    schedule: "",
    items: [],
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
        case ACTIONS.addQuantity:
            console.log(action.payload);
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