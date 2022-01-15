const initialData = {
    list: []
}


const todoReducer = (state = initialData, action)=>{ 
    switch(action.type){
        case 'Add':
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data : data
                }
            ]
            }

            case 'Delete':
               const newList = state.list.filter((ele)=> ele.id!==action.id)
                return {
                    ...state,
                    list : newList
                }    

            case 'Remove': return { 
                ...state,
                list : []
            }

        default : return state;
    }
}
export default todoReducer;