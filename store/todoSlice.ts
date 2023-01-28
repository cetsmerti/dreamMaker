import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { todoData } from './../component/CoverInterface/CoverInterface.props'
export type TObjonPush = {
    todo: string
    rate: number
    list: string
    id?: string
}
type TodosState = {
    todos: TObjonPush[],
    objonPush: TObjonPush
}
const initialState: TodosState = {
    todos: [],
    objonPush: {
        todo: '',
        rate: -1,
        list: ''
    }
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<TObjonPush>) {
            state.todos.push(action.payload)
        },
        addToObjTodo(state, action: PayloadAction<string>) {
            state.objonPush.todo = action.payload
        },
        addToObjRate(state, action: PayloadAction<number>) {
            state.objonPush.rate = action.payload
        },
        addToObjList(state, action: PayloadAction<string>) {
            state.objonPush.list = action.payload
        },
        dellTodos(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        filterTodos(state, action: PayloadAction<boolean>) {
            action.payload == true ? state.todos = state.todos.sort((a, b) => a.rate > b.rate ? 1 : -1) : state.todos = state.todos.sort((a, b) => a.rate < b.rate ? 1 : -1)
        },
        filterTodosPunkts(state, action: PayloadAction<boolean>) {
            action.payload == true ? state.todos = state.todos.sort((a, b) => a.list > b.list ? 1 : -1) : state.todos = state.todos.sort((a, b) => a.list < b.list ? 1 : -1)
        }

    }
})

export const { addTodo, addToObjTodo, addToObjRate, addToObjList, dellTodos, filterTodos, filterTodosPunkts } = todoSlice.actions;
export default todoSlice.reducer