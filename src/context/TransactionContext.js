import React,{createContext,useEffect,useState,useReducer} from 'react';
import TransactionReducer from './TransactionReducer';

const initialState={
    transactions:localStorage.getItem('transactions')
    ? JSON.parse(localStorage.getItem('transactions'))
    : []
}

export const TransactionContext=createContext(initialState);

export const TransactionProvider=({children})=>{
    const [state,dispatch]=useReducer(TransactionReducer,initialState);
    const [updater,setUpdater]=useState([{id:-1,description:"",amount:""}]); 
    const [boolUpdater,setBoolUpdater]=useState(false);
    
    const amounts=state.transactions.map(transaction=>transaction.amount);
    const income=amounts.filter(amount=>amount>0).reduce((total,amount)=>(total+=amount),0);
    const expense=(amounts.filter(amount=>amount<0).reduce((total,amount)=>(total+=amount),0)*-1);
    const totalBalance=amounts.reduce((total,amount)=>(total+=amount),0);

    function addTransaction(transaction){
        setBoolUpdater(false);
        dispatch(
            {
                type:"ADD_TRANSACTION",
                payload:transaction
            }
        );
    }

    function deleteTransaction(id){
        setBoolUpdater(false);
        dispatch(
            {
                type:"DELETE_TRANSACTION",
                payload:id
            }
        );
    }

    function updateTransaction(updatedTransaction){
        setBoolUpdater(false);
        dispatch(
            {
                type:"UPDATE_TRANSACTION",
                payload:updatedTransaction
            }
        );
    }
    
    function update(id){
        setUpdater(state.transactions.filter(transaction=>transaction.id===id));
        setBoolUpdater(true);
    }

    useEffect(() => {
        localStorage.setItem('transactions',JSON.stringify(state.transactions))
    }, [state.transactions])

    return(
        <TransactionContext.Provider value={
        {transactions:state.transactions,
        income,expense,totalBalance,
        updater,boolUpdater,
        addTransaction,deleteTransaction,updateTransaction,update}
        }>
            {children}
        </TransactionContext.Provider>
    ); 
}   