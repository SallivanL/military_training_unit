import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface AnimationState {
    introPlayed: boolean
    showTitle: boolean
    showContent: boolean
    showNavigation: boolean

    isAnimationEnded: boolean
}

const initialState: AnimationState = {
    introPlayed: false,
    showTitle: false,
    showContent: false,
    showNavigation: false,

    isAnimationEnded: false
};

const animationSlice = createSlice({
    name: "animation",
    initialState,
    reducers: {

        showHeroTitle(state) {
            state.showTitle = true;
        },

        showHeroContent(state) {
            state.showContent = true;
        },

        showNavigation(state, action: PayloadAction<boolean | undefined>) {
            state.showNavigation = action.payload ?? true;
        },

        markIntroPlayed(state) {
            state.introPlayed = true;
        },

        animationEnded(state) {
            state.isAnimationEnded = true;
        }

    }
});

export const {
    showHeroTitle,
    showHeroContent,
    showNavigation,
    markIntroPlayed,
    animationEnded
} = animationSlice.actions;

export default animationSlice.reducer;