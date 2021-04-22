import React from 'react';
import '../App.css';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import TransactionGraph from './TransactionGraph';
import { TransactionProvider } from '../context/TransactionContext';
import { IntlProvider } from 'react-intl';

const Container=()=>{
    
    return(
        <div className='container'>
            <Header/>
            <TransactionProvider>
                <IntlProvider locale={"en"}>
                    <Balance/>
                    <IncomeExpense/>
                    <TransactionList/>
                </IntlProvider>
                <TransactionGraph/>
                <AddTransaction/>
            </TransactionProvider>
        </div>
    );
}

export default Container;