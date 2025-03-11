import {createSlice} from '@reduxjs/toolkit'
import { getPartnerInfo } from './userSlice';

const partnerSlice = createSlice({
    name : 'partner',
    initialState : {
        partnerInfo : {},
        partnerProfile : {},
    },
    reducers : {
        // multiple actions here
        getPartner:(state,action)=>{
            state.partnerInfo = action.payload || {};
        },
        getPartnerProfile:(state,action)=>{
            state.partnerProfile = action.payload;
        },
    }
});

export const {getPartner, getPartnerProfile} = partnerSlice.actions;
export default partnerSlice.reducer