import React,{useState,useEffect,useContext} from 'react';
import '../App.css'
import {TransactionContext} from '../context/TransactionContext.js';

const AddTransaction=()=>{
    const [description,setDescription] = useState('');
    const [amount,setAmount]=useState('');
    const {updater,boolUpdater,addTransaction,updateTransaction}=useContext(TransactionContext);
    
    useEffect(() => {
        setDescription(updater[0].description) 
        setAmount(updater[0].amount)
    }, [updater[0]])

    function setDescriptionValue(e){
        setDescription(e.target.value) 
    }

    function setAmountValue(e){
        setAmount(e.target.value)
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id:boolUpdater?updater[0].id:Math.floor(Math.random()*10000000),
            description,
            amount:+amount
        }
        boolUpdater?updateTransaction(newTransaction):addTransaction(newTransaction);
        setDescription("");
        setAmount("");
    }

    return(
        <div className='add-transaction'>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={description} onChange={(e)=>setDescriptionValue(e)} placeholder="Description" required/>
                <input type="number" value={amount}  onChange={(e)=>setAmountValue(e)} placeholder="Amount (+income & -expense)" required/>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
    );
}

export default AddTransaction;