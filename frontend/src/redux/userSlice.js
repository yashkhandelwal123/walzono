import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : null,
        location : "india"
    },
    reducers : {
        // multiple actions here
        getUser:(state,action)=>{
            state.user = action.payload;
        },
        addLocation:(state,action)=>{
            state.location = action.payload
        }
    }
});

export const {getUser , addLocation} = userSlice.actions;
export default userSlice.reducer