import React, { useContext,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen,faArrowAltCircleDown,faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import {TransactionContext} from '../context/TransactionContext';
import {FormattedNumber} from "react-intl";


const TransactionList=()=>{
    const {transactions,deleteTransaction,update}=useContext(TransactionContext);
    const [arrow,setArrow]=useState(faArrowAltCircleDown);
    const [toggleList,setToggleList]=useState({display:'none'});

    const changeArrow=()=>{
        if(toggleList.display==='none')
        setToggleList({display:'flex'});
        else
        setToggleList({display:'none'});

       arrow===faArrowAltCircleUp? setArrow(faArrowAltCircleDown):setArrow(faArrowAltCircleUp);
    }


    function deleteList(id){
        deleteTransaction(id);
    }

    function updateList(id){
        update(id);
    }

    return(
        <div className="transaction">
            <div className='transaction-menu'>
                <div>
                    <h3>Transaction List</h3>
                </div>
                <div onClick={changeArrow}>
                    <FontAwesomeIcon icon={arrow}/>
                </div>
            </div>
            <div className="transaction-list">
                {transactions.map(transaction=>(
                <ul className="list" style={toggleList} key={transaction.id}>
                    <li className="list-item-history" style={{color:transaction.amount<0?'red':''}}>
                        <span className="description">{transaction.description}</span>
                        <span className="amount">
                            <FormattedNumber value={transaction.amount} style="currency" currency="USD"/>
                        </span>
                    </li>
                    <li className="list-item-actions">
                        <span onClick={()=>deleteList(transaction.id)} className="delete"><FontAwesomeIcon icon={faTrash}/></span>
                        <span onClick={()=>updateList(transaction.id)} className="update"><FontAwesomeIcon icon={faPen}/></span>
                    </li>
                </ul>))} 
            </div>
        </div>
    );
}

export default TransactionList;