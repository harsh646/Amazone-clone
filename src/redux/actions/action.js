export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }

}

export const REM=(item)=>{
    return{
        type:"REM_CART",
        payload:item
    }

}

export const DEL=(item)=>{
    return{
        type:"DEL_CART",
        payload:item
    }

}