// app/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import dialogReducers from "./slices/dialog/dialogSlices";
import dropdownReducers from "./slices/dropdown/dropdownSlices";
import collapseReducers from "./slices/collapse/collapseSlices";
import musicPlayerReducers from "./slices/player/musicPlayerSlices";
// Create the Redux store
export const store = configureStore({
  reducer: {
    dialog: dialogReducers,
    dropdown: dropdownReducers,
    collapse: collapseReducers,
    player: musicPlayerReducers,
  },
});

// Infer types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks for usage in components
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
