import React, { Fragment, useState } from 'react'

function ExpenseForm() {

    const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [expenses, setExpenses] = useState([]);


    const handleSubmit = (e)=>{
        e.preventDefault()
        const newExpenses = {amount, description, category}
        setExpenses([...expenses, newExpenses])
        setAmount('')
        setDescription('')
        setCategory('Food')
    }
  return (
<Fragment>
   <div>

   <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Salary">Salary</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses:</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.amount} - {expense.description} - {expense.category}
          </li>
        ))}
      </ul>

   </div>
</Fragment>  )
}

export default ExpenseForm