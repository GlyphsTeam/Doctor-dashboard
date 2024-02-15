import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuth: false,
    isLoading: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, actions) => {
            state.isAuth = actions.payload;
        },
        setLoading: (state, actions) => {
            state.isLoading = actions.payload;
        }
    }
});


export const authState = ((state) => state.auth);

export const { setAuth, setLoading } = authSlice.actions;

export default authSlice.reducer;
