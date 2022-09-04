import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../models/IUser"
// БЕЗ RTK query
interface UserState {
    users: IUser[]
    isLoading: boolean
    error: undefined | string
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: undefined,
    count: 0
}

export const fetchUsers = createAsyncThunk<IUser[], undefined, {rejectValue: string}>('user/fetchUsers', async (_, {rejectWithValue}) =>{
    try {
        const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return res.data
    } catch (error) {
        return rejectWithValue('Не удалось загрузить пользователей')
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = undefined
                state.users = action.payload
            })
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchUsers.rejected, (state, action: AnyAction) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})


export const {} = userSlice.actions
export default userSlice.reducer