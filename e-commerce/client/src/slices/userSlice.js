
import { createSlice, current } from '@reduxjs/toolkit';



const userSlice = createSlice({
    name: 'user',
    initialState: {
        errorMessage: '',
    },
    reducers: {
        setErrorMessage: (state, action) => { 
            state.errorMessage = action.payload;
        },
        clearErrorMessage: (state, action) => {
            state.errorMessage = '';
        },
    }
})

export const errorMessage = (state) => state.user.errorMessage;
export const {setErrorMessage, clearErrorMessage} = userSlice.actions;

export default userSlice.reducer;