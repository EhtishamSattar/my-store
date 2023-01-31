const reducer = (state=[],action)=>{
    if(action.type==='add'){
            for(let i=0;i<state.length;i++)
            {
                if(action.payload.id===state[i].id)
                {
                    state[i].quantity+=1;
                    state[i].priceXquantity+=state[i].price;
                    return state
                }
            }
            state.push(action.payload)
            return state
    }else if(action.type==='remove'){
        for(let i=0;i<state.length;i++)
        {
            
            if(action.payload.id===state[i].id && action.payload.quantity>1)
            {
                
                state[i].quantity--;
                state[i].priceXquantity=state[i].priceXquantity-state[i].price;
                return state
            }else if(action.payload.id===state[i].id && action.payload.quantity===1)
            {
                state.splice(i,1)
                return state
            }
        }
        // console.log(state)
        
    }else{
        
        state=[]
        return state
    }
}

export default reducer