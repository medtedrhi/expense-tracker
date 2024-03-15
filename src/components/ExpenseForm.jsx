import { useContext, useState } from "react";
import { AppContext } from '../actions/AppActions';
import { v4 as uuidv4 } from 'uuid';

export default function ExpenseForm() {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

        // Clear the form fields after submission
        setName('');
        setCost('');
    }

    return (
        <form action="" className="" onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={e => setName(e.target.value)}
                        required
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        onChange={e => setCost(e.target.value)}
                        required
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button
                        type='submit'
                        className='btn btn-primary mt-3'
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}