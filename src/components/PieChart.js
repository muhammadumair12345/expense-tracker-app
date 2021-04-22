import React,{useState,useContext,useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import {TransactionContext} from '../context/TransactionContext';


const PieChart = () => {
  const [chartData, setChartData] = useState({});
  const {transactions,income,expense,totalBalance}=useContext(TransactionContext);

  useEffect(() => {
    const chart=()=>{
      setChartData({
        labels: ['Income', 'Expense', 'Balance'],
        datasets: [
          {
            label: 'Expense Tracker',
            data: [income,expense,totalBalance],
            backgroundColor: [
              'green',
              'red',
              'blue',
            ],
            borderColor: [
              'green',
              'red',
              'blue',
            ],
            borderWidth: 1,
          },
        ],
      });
    }
    chart();
  }, [transactions]);

  return(
    <Pie 
      data={chartData} 
      height={80}
      width={200}
      options={{
        responsive:false,
        legend: {
          position:'left',
          labels: {
            fontFamily:"Helvetica",
          }
        }
      }}
    />
    );
}

export default PieChart;