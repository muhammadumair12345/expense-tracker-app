import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown,faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import PieChart from './PieChart';

const TransactionGraph=()=>{
    const [arrow,setArrow]=useState(faArrowAltCircleDown);
    const [toggleList,setToggleList]=useState({display:'none'});

    const changeArrow=()=>{
        if(toggleList.display==='none')
        setToggleList({display:'flex'});
        else
        setToggleList({display:'none'});

       arrow===faArrowAltCircleUp? setArrow(faArrowAltCircleDown):setArrow(faArrowAltCircleUp);
    }

    return(
        <div className="transaction">
            <div className='transaction-menu'>
                <div>
                    <h3>Graph</h3>
                </div>
                <div onClick={changeArrow}>
                    <FontAwesomeIcon icon={arrow}/>
                </div>
            </div>
            <div className="transaction-graph" style={toggleList}>
                <PieChart/>
            </div>
        </div>
    );
}

export default TransactionGraph;