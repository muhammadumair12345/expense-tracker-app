import React,{useContext} from 'react';
import AnimatedNumber from "animated-number-react";
import '../App.css';
import {TransactionContext} from '../context/TransactionContext';
import {FormattedNumber} from "react-intl";

const Balance=()=>{
    const {totalBalance}=useContext(TransactionContext);

    return(
        <div className='balance'>
            <h2>Balance</h2>
            <p>
                <AnimatedNumber 
                value={totalBalance} 
                formatValue={n=><FormattedNumber value={n} style="currency" currency="USD"/>}
                />
            </p>
        </div>
    );
}

export default Balance;