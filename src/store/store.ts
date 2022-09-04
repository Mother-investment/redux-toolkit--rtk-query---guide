import { configureStore } from '@reduxjs/toolkit'
import { postAPI } from '../services/postService';
import userReducer from './reducers/userSlice';

// const rootReducer = combineReducers({ --- можно закидывать редюсеры в комбаин, и его присваивать reducer:, или можно присвоить объект {}

// })

export const store = configureStore({
    reducer: {
      user: userReducer,
      [postAPI.reducerPath]: postAPI.reducer  // postAPI.reducerPath - ключ из services/UserService
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
    devTools: process.env.NODE_ENV !== 'production'
  })

// типизация стора \/ --> hooks/redux.ts
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
