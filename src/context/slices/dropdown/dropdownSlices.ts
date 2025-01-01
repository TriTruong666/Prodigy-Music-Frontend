import { createSlice, combineReducers } from "@reduxjs/toolkit";

interface MenuDropdownState {
  isToggleDropdown: boolean;
  isToggleAnimationDropdown: boolean;
}

const initialMenuDropdownState: MenuDropdownState = {
  isToggleDropdown: false,
  isToggleAnimationDropdown: false,
};

// slices
const menuDropdownSlice = createSlice({
  name: "menuDropdown",
  initialState: initialMenuDropdownState,
  reducers: {
    toggleMenuDropdown: (state) => {
      state.isToggleDropdown = !state.isToggleDropdown;
    },
    toggleMenuDropdownOn: (state) => {
      state.isToggleDropdown = true;
    },
    toggleMenuDropdownOff: (state) => {
      state.isToggleDropdown = false;
    },
    toggleAnimationMenuDropdownOn: (state) => {
      state.isToggleAnimationDropdown = true;
    },
    toggleAnimationMenuDropdownOff: (state) => {
      state.isToggleAnimationDropdown = false;
    },
  },
});

// export actions
export const {
  toggleMenuDropdown,
  toggleMenuDropdownOff,
  toggleMenuDropdownOn,
  toggleAnimationMenuDropdownOn,
  toggleAnimationMenuDropdownOff,
} = menuDropdownSlice.actions;

// export reducers
const dropdownReducers = combineReducers({
  menuDropdown: menuDropdownSlice.reducer,
});
export default dropdownReducers;
