import {createSlice} from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {},
    },
    reducers: {}
})

export const selectCards = state => state.cards.cards;
export default cardsSlice.reducer