import React, { Fragment, useEffect, useState } from 'react'
import { firestore} from '../firebase/firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { logout } from '../store/AuthSlice';
import { useNavigate } from 'react-router-dom';

function ExpenseForm({onchange}) {

    // useState
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');
  const [expenses, setExpenses] = useState([]);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //  firestore collection 
    const expenseCollection = collection(firestore, "expense")


    const handleSubmit = (e)=>{
        e.preventDefault()
        const newExpenses = {amount, description, category}
        // setExpenses([...expenses, newExpenses])
        
        const createExpense = async(newExpenses)=>{
          try{
            if(amount && description){
              await addDoc(expenseCollection, newExpenses)
            setAmount('')
            setDescription('')
            setCategory('Food')
            }
          }
          catch(error){console.log(error.message)}
        }
        createExpense(newExpenses)      
    }

    const deleteHandler = async(id)=>{
      try{
        // const docRef = doc(db, 'your_collection_name', id);
        const docRef    = doc(firestore,'expense', id)
        await deleteDoc(docRef)
      }
      catch(error){console.log('errr')}
    }

    const updateHandler = async(id)=>{
      const updateExpenses = {amount, description, category}

      try{
        const docRef = doc(firestore, 'expense', id)
        if(amount && description){
          await updateDoc(docRef, updateExpenses)
          setAmount('')
          setDescription('')
          setCategory('Food')
        }
        
      }
      catch(error){console.log('error')}
    }

    const logOut = ()=>{
      dispatch(logout())
      onchange(null)

      navigate('/')
      
    }

    useEffect(()=>{
      const getData = async()=>{
        try{
          const data = await getDocs(expenseCollection)
          const docs = data.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpenses(docs);
        }
        catch(error){console.log(error.message)}
      }
      getData()
    },[expenseCollection])

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
          </select>
        </div>
        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses:</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.amount} - {expense.description} - {expense.category} - <button onClick={()=>updateHandler(expense.id)}>Update</button> - <button onClick={()=>deleteHandler(expense.id)}>delete</button>
          </li>
        ))}
      </ul>
      <h2><button onClick={logOut}>Logout</button></h2>

   </div>
</Fragment>  )
}

export default ExpenseForm