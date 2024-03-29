import ExpenseItem from './ExpenseItem ';
export default function ExpenseList() {
    
    const expenses = [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 500 },
    ];
    return (
        <div>
            <ul className='list-group'>
                {
                    expenses.map(expense => <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>)
                }
            </ul>
        </div>
    )
}