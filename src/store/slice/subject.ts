import axios from '@/util/http';
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosRes } from '@/util/type';
import { RootState } from '../index';
const initialState = {
subject_tree:[],//课程树
active_two:{
    title:'',  //二级课程名称
    value:''   //二级课程id
}  //二级分类信息
}
export const  get_subject_tree = createAsyncThunk('get/subject_tree',async(action,state)=>{
    const res:AxiosRes = await axios.get('/api/subject')
    return res.data.data
})
export const subjectSlice = createSlice({
    name:'subject',
    initialState,
    reducers:{
        set_subject_active_two:(state,action)=>{
            state.active_two = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(get_subject_tree.fulfilled,(state,res)=>{
            state.subject_tree = res.payload
        })
    }
})
export const select_active_two = (state:RootState)=>{return state.subject.active_two}
export const {set_subject_active_two} = subjectSlice.actions
export const select_subject_tree = (state:RootState)=>state.subject.subject_tree
export default subjectSlice.reducer