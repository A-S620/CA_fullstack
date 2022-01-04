import {createSlice} from "@reduxjs/toolkit";
import {addQuizId} from "../topics/TopicsSlice";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, topicId, name, cardIds} = action.payload;
            state.quizzes[id] = {
                id: id,
                topicId: topicId,
                name: name,
                cardIds: cardIds
            }
        }
    }
});
export const selectQuizzes = state => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
export const addQuizForTopicId = ({id, topicId, name, cardIds}) => {
    return (dispatch) => {
        dispatch(addQuiz({id, topicId, name, cardIds}));
        dispatch(addQuizId({quizId: id, topicId}));
    }

}
