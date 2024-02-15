import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mediaData: null
};


const mediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        setMedia: (state, actions) => {
            state.mediaData = actions.payload;
        }
    }
});


export const mediaState = ((state) => state.media);

export const { setMedia } = mediaSlice.actions;

export default mediaSlice.reducer;