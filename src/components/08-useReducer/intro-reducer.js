const initialState = [{
    id: 1,
    todo: 'comprar aldgo',
    done: false
}];

const newTodo = [{
    id: 2,
    todo: 'comprar algodon',
    done: false
}];

const todoReducer = ( state = initialState, action) => {
    
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    
    return state
}

let todos = todoReducer();

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer (todos, action)
console.log(todos);