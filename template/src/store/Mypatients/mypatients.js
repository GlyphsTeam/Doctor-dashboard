import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    mypatientsData: null
};


const patientsSlice = createSlice({
    name: "mypatients",
    initialState,
    reducers: {
        setPatientData: (state, actions) => {
            state.mypatientsData = actions.payload
        }
    }
});

export const patientState = ((state) => state.mypatients);

export const { setPatientData } = patientsSlice.actions;


export default patientsSlice.reducer;