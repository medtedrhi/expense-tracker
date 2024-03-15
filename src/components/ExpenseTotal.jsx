import { useContext } from 'react'
import {AppContext} from '../context/AppContext'
export default function ExpenseTotal () {
    const { expenses } = useContext(AppContext)
    let expensesTotal = expenses.reduce((total, expense)=> total + expense.cost,0 )
    return (
        <div className='alert alert-primary'>
            <span>Spent So far : ${expensesTotal} </span>
        </div>
    )
}