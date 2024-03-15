import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budjet from './components/Budjet';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList.1';
import ExpenseForm from './components/ExpenseForm';
import {AppProvider} from './context/AppContext.jsx'



function App() {
  return (
    <AppProvider>
      <div className='container'>
        <h1>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budjet />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3'>Expenses :</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseForm />
          </div>
        </div>
      </div>

    </AppProvider>


  );
}

export default App;