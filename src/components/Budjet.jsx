import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import UpdateBudget from './UpdateBudget'
import ViewBudget from './ViewBudget';
export default function Budjet(props) {
    const { budget, dispatch } = useContext(AppContext)
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = (update) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: update,
        });
        setIsEditing(false);
    };
    return (
        <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <UpdateBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                // For part 1 render component inline rather than create a seperate one
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )}
        </div>
    );
}