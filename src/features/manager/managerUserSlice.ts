import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model/User';
import { initListUser } from '../../data/fakeData';


const initialState: User[] = initListUser;

export const managerUserSlice = createSlice({
    name: 'managerUser',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        updateUser: (state, action: PayloadAction<User>) => {
            let indexUserUpdate = state.findIndex(user => user.id === action.payload.id)
            if (indexUserUpdate > -1) {
                state[indexUserUpdate] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            return state.filter(user => user.id !== action.payload);
        },
    },
})

export const { addNewUser, updateUser, deleteUser } = managerUserSlice.actions

export default managerUserSlice.reducer