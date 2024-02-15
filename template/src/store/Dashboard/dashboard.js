import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    dashboardData: null,
}

const dashBoardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDataDashboard: (state, actions) => {
            state.dashboardData = actions.payload;
        }
    }
});

export const dashboardState = ((state) => state.dashboard);

export const { setDataDashboard } = dashBoardSlice.actions;


export default dashBoardSlice.reducer;