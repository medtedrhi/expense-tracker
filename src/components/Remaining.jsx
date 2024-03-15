import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Remaining() {
    const { expenses, budget } = useContext(AppContext)
    const totalExpenses = parseInt(budget) - parseInt(expenses.reduce((total, expense) => total + expense.cost, 0))
    const alertMsg = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertMsg}`}>
            <span>Remaining: ${totalExpenses}</span>
        </div>
    )
}