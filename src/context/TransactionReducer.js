const TransactionReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case "UPDATE_TRANSACTION":
            return {
                ...state,
                transactions:state.transactions.map(transaction=>{
                    if(transaction.id===action.payload.id)
                    {
                        transaction=action.payload;
                    }
                    return transaction;
                })
            }
        default:
            return state;
    }
}

export default TransactionReducer;