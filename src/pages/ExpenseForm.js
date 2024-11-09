import React, { Fragment, useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";

import {
  query,
  where,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useDispatch } from "react-redux";
import { logout } from "../store/AuthSlice";
import "./EspenseForm.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function ExpenseForm() {
  // useState
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenses, setExpenses] = useState([]);

  const local = JSON.parse(localStorage.getItem("login"));
  // console.log("local", local);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expenseCollection = collection(firestore, "expense");

  //  firestore collection

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit 1");
    const newExpenses = { amount, description, category };
    // setExpenses([...expenses, newExpenses])
    console.log("handle submit 2");

    const createExpense = async (newExpenses) => {
      try {
        if (amount && description) {
          console.log("handle submit 3", newExpenses);
          console.log("local inside", local);
          // await addDoc(expenseCollection, { local: newExpenses });
          await addDoc(expenseCollection, {
            email: local,
            otherField: newExpenses,
          });
          setAmount("");
          setDescription("");
          setCategory("Food");
          console.log("handle submit 5");
        }
      } catch (error) {
        console.log("error", error.message);
        console.log("handle submit 6");
      }
    };
    createExpense(newExpenses);
    console.log("handle submit 7");
  };

  const deleteHandler = async (id) => {
    try {
      // const docRef = doc(db, 'your_collection_name', id);
      const docRef = doc(firestore, "expense", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.log("errr");
    }
  };

  const updateHandler = async (id) => {
    const updateExpenses = { amount, description, category };

    try {
      const docRef = doc(firestore, "expense", id);
      if (amount && description) {
        await updateDoc(docRef, updateExpenses);
        setAmount("");
        setDescription("");
        setCategory("Food");
      }
    } catch (error) {
      console.log("error");
    }
  };

  const logOut = () => {
    try {
      localStorage.removeItem("login");
      navigate("/login");
      dispatch(logout());
      console.log("logout end");
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally, handle the error (e.g., show a notification)
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const usersQuery = query(
          collection(firestore, "expense"), // Reference to the 'users' collection
          where("email", "==", local) // Filter for users older than 25
        );
        const querySnapshot = await getDocs(usersQuery); // 'users' is the Firestore collection
        const usersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExpenses(usersList);
      } catch (error) {
        console.log("this is error", error.message);
      }
    };
    getData();
  }, [expenseCollection, local]);
  return (
    <Fragment>
      <Header />
      <div className="expenseformBox">
        <div className="expenseform">
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
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Food">Food</option>
                <option value="Petrol">Petrol</option>
                <option value="Salary">Salary</option>
              </select>
            </div>
            <button type="submit" className="button">
              Add Expense
            </button>
          </form>

          <h3>Expenses:</h3>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.otherField.amount} - {expense.otherField.description} -{" "}
                {expense.otherField.category} -{" "}
                <button onClick={() => updateHandler(expense.id)}>
                  Update
                </button>{" "}
                -{" "}
                <button onClick={() => deleteHandler(expense.id)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
          <h2>
            <button className="button" onClick={logOut}>
              Logout
            </button>
          </h2>
        </div>
      </div>
    </Fragment>
  );
}

export default ExpenseForm;
