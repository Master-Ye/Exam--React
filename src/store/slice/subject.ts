import axios from '@/util/http';
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosRes } from '@/util/type';
import { RootState } from '../index';
const initialState = {
    loading:false,
    active_topic:null,
subject_tree:[],//课程树
active_two:{
    value:'',
    title:""
},
topic_two_list:[] //二级分类信息
}
export const  get_subject_tree = createAsyncThunk('get/subject_tree',async(action,state)=>{
    const res:AxiosRes = await axios.get('/api/subject')
    return res.data.data
})
export const get_topic_two_list:any = createAsyncThunk('get/topic_two_list',async(action,state)=>{
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
        }).addCase(get_topic_two_list.fulfilled,(state,res)=>{
            state.topic_two_list = res.payload
        })
    }
})
export const select_active_two = (state:RootState)=>{return state.subject.active_two}
export const {set_subject_active_two} = subjectSlice.actions
export const select_topic_two_list = (state:RootState) =>{
    return state.subject.topic_two_list
}
export const select_subject_tree = (state:RootState)=>state.subject.subject_tree
export default subjectSlice.reducer