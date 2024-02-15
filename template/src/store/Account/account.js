import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    accountData: null
};


const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccount: (state, actions) => {
            state.accountData = actions.payload;
        }
    }
});


export const accountState = ((state) => state.account);


export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
