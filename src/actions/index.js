export const addItem = (item) => {
    return {

        type:"Add",
        payload:{
            id: Math.random(),
            data:item
        } 

    }
}
export const deleteItem = (id) => {
    return {

        type:"Del",
        payload:id
    }
}
export const remAll = () => {
    return {

        type:"Rem",
        
    }
}