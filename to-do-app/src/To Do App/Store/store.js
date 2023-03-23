import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../Slice/slice'
export default configureStore({
  reducer: {
    todoReducer:todoReducer
  },
});
