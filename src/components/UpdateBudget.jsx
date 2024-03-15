import { useState } from 'react'

export default function UpdateBudget(props) {
    const [update, setUpdate] = useState(props.budget)
    
    return (
        <>
            <input type="number" value={update}
                onChange={e => setUpdate(e.target.value)}
            />
            <button
            className='btn btn-primary'
                onClick={() => props.handleSaveClick(update)}
            >
                save
            </button>
        </>

    )
}