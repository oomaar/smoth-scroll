import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'toggleShow',
    initialState: {
        value: false,
    },
    reducers: {
        setToggleShow: state => {
            state.value = !state.value;
        }
    },
});

export const { setToggleShow } = sidebarSlice.actions;

export const selectToggleShow = state => state.toggleShow.value;

export default sidebarSlice.reducer;
