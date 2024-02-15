import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    availableData: null
};


const availableSlice = createSlice({
    name: "availabletiming",
    initialState,
    reducers: {
        setAvailabletiming: (state, actions) => {
            state.availableData = actions.payload;
        }
    }

});


export const availableteState = ((state) => state.availabletiming);

export const { setAvailabletiming } = availableSlice.actions;

export default availableSlice.reducer;