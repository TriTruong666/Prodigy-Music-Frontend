import { createSlice, combineReducers } from "@reduxjs/toolkit";

interface MusicPlayerState {
  isTogglePlayer: boolean;
  isAnimationPlayer: boolean;
}

const initialMusicPlayerState: MusicPlayerState = {
  isTogglePlayer: false,
  isAnimationPlayer: false,
};

const musicPlayerSlice = createSlice({
  name: "musicPlayer",
  initialState: initialMusicPlayerState,
  reducers: {
    toggleMusicPlayer: (state) => {
      state.isTogglePlayer = !state.isTogglePlayer;
    },
    toggleMusicPlayerOn: (state) => {
      state.isTogglePlayer = true;
    },
    toggleMusicPlayerOff: (state) => {
      state.isTogglePlayer = false;
    },
    toggleAnimationMusicPlayerOn: (state) => {
      state.isAnimationPlayer = true;
    },
    toggleAnimationMusicPlayerOff: (state) => {
      state.isAnimationPlayer = false;
    },
  },
});

// export actions
export const {
  toggleMusicPlayer,
  toggleMusicPlayerOn,
  toggleMusicPlayerOff,
  toggleAnimationMusicPlayerOn,
  toggleAnimationMusicPlayerOff,
} = musicPlayerSlice.actions;

// export reducers
const musicPlayerReducers = combineReducers({
  musicPlayer: musicPlayerSlice.reducer,
});
export default musicPlayerReducers;
