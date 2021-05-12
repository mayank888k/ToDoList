const initialState = {
    list:[]
}

const todoreducer = (state=initialState,action) =>
{
    switch(action.type)
    {
        case "Add":
            return (
                {
                    list:[
                        ...state.list,{
                            data: action.payload.data,
                            id: action.payload.id
                        }
                    ]
                }
            )
        case "Del":
            return (
                {
                    list: state.list.filter( (value)=>value.id !== action.payload)
                }
            )

        case "Rem":
            return (
                {  
                    list:[]
                }
            )
        
        default: return state
    }
}

export default todoreducer