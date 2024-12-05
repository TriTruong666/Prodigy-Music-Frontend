
import { createSlice, combineReducers } from "@reduxjs/toolkit";
// interface
interface AddArtistDialogState{
    isToggleDialog: boolean;
}
// initial states
const initialAddArtistDialogState: AddArtistDialogState = {
    isToggleDialog: false
}
// slices
const addArtistDialogSlice = createSlice({
    name: "addArtistDialog",
    initialState: initialAddArtistDialogState,
    reducers: {
        toggleAddArtistDialog: (state) =>{
            state.isToggleDialog = !state.isToggleDialog
        }
    }
})

// export action
export const {toggleAddArtistDialog} = addArtistDialogSlice.actions;

// export reducer
const dialogReducers = combineReducers({
    addArtistDialog: addArtistDialogSlice.reducer
})
export default dialogReducers;