import {createSlice} from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            '123': {
                id: '123',
                name: 'this is a topic',
                icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg',
                quizIds: []
            }
        }
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []

            }
        }
    }
})
export const selectTopics = state => state.topics.topics;
export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
