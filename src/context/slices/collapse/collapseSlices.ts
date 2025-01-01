import { createSlice, combineReducers } from "@reduxjs/toolkit";

interface PlaylistCollapseState {
  isTogglePlaylistCollapse: boolean;
  isToggleAnimationPlaylistCollapse: boolean;
}

const initialPlaylistCollapseState: PlaylistCollapseState = {
  isTogglePlaylistCollapse: false,
  isToggleAnimationPlaylistCollapse: false,
};

const playlistCollapseSlice = createSlice({
  name: "playlistCollapse",
  initialState: initialPlaylistCollapseState,
  reducers: {
    togglePlaylistCollapse: (state) => {
      state.isTogglePlaylistCollapse = !state.isTogglePlaylistCollapse;
    },
    togglePlaylistCollapseOn: (state) => {
      state.isTogglePlaylistCollapse = true;
    },
    togglePlaylistCollapseOff: (state) => {
      state.isTogglePlaylistCollapse = false;
    },
    toggleAnimationPlaylistCollapse: (state) => {
      state.isToggleAnimationPlaylistCollapse =
        !state.isToggleAnimationPlaylistCollapse;
    },
    toggleAnimationPlaylistCollapseOn: (state) => {
      state.isToggleAnimationPlaylistCollapse = true;
    },
    toggleAnimationPlaylistCollapseOff: (state) => {
      state.isToggleAnimationPlaylistCollapse = false;
    },
  },
});

// export actions
export const {
  togglePlaylistCollapse,
  toggleAnimationPlaylistCollapse,
  togglePlaylistCollapseOn,
  togglePlaylistCollapseOff,
  toggleAnimationPlaylistCollapseOn,
  toggleAnimationPlaylistCollapseOff,
} = playlistCollapseSlice.actions;

// export reducers
const collapseReducers = combineReducers({
  playlistCollapse: playlistCollapseSlice.reducer,
});

export default collapseReducers;
