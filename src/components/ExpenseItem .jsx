import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import { TiDelete } from 'react-icons/ti';
export default function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext)
    const handelDelete = ()=>{
        dispatch({
            type : 'DELETE_EXPANSES',
            payload : props.id
        })
    }
    return (
        <li key={props.id} className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div >
                <span className='badge rounded-pill bg-primary mr-3'>${props.cost}</span>
                <TiDelete size='1.5em' onClick={handelDelete}></TiDelete>
            </div>
        </li>
    )
}