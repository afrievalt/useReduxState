import uuid from "uuid/v4";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  message: string;
  color: string;
  completed: boolean;
}

type PayloadType = {
  message: string;
  color: string;
};

const todos = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    addTodo: (state, action: PayloadAction<PayloadType>) => {
      const { message, color } = action.payload;
      state.push({ id: uuid(), message, color, completed: false });
      return state;
    },
    deleteTodo: (state, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),
    completeTodo: (state, action: PayloadAction<string>) => {
      const completedTodo = state.find((todo) => todo.id === action.payload);
      completedTodo.completed = true;
      return state;
    },
    sort: (state) => state.sort((a, b) => a.message.localeCompare(b.message))
  }
});

export default todos;
