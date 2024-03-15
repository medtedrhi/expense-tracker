import React, { createContext, useReducer} from "react";

const appReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [
                    ...state.expenses, action.payload
                ]
            }
        case 'DELETE_EXPANSES':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: "shopping", cost: 100 },
        { id: 13, name: "holiday", cost: 100 },
        { id: 14, name: "Games", cost: 100 }

    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(appReducer, initialState);


    return (
        <AppContext.Provider value={{ budget: state.budget, expenses: state.expenses, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};