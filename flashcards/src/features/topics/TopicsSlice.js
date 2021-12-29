import {createSlice} from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            '123': {
                id: '123',
                name: 'example topic',
                icon: 'icon url',
                quizIds: ['456']
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            console.log(action)
            state.topics = {
                ...state.topics,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds: []

                }
            }
        }
    }
})
export const selectTopics = state => state.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
