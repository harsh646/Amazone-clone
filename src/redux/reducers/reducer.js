const INIT_STATE={
    carts :[]
};

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
        case "REM_CART":
            const data=state.carts.filter((el)=>el.id!==action.payload.id)
            return{
                ...state,
                carts:data
            }
            case "DEL_CART":
                return{
                    carts:[]
                }
        
        default:
            return state
            
    }
}

