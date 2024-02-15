import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    appointmentsData: null
};

const appointmentSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
        setAppointment: (state, actions) => {
            state.appointmentsData = actions.payload;
        }
    }
});

export const appointmentState = ((state) => state.appointments);

export const { setAppointment } = appointmentSlice.actions;

export default  appointmentSlice.reducer;