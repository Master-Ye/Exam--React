import { useDispatch } from "react-redux";
import axios from '@/util/http'
import {AxiosRes,ResData} from "@/util/type"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "antd";
import { message } from "antd";
const COUNT = 50
const Login:React.FC =()=>{
    const [count,set_count] = useState(0)
    const [form] = Form.useForm()
    const [messageApi,contextHolder] = message.useMessage()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            if(count === 0)return
            set_count(count-1)
        },1000)
    },[count])
    const startCode = () =>{
        if(count!==0) return
        form.validateFields(['phone'])
        .then(()=>{
            set_count(COUNT)
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }
    const onFinishFailed = (errorInfo:any)=>{

    }
    return (<h1>login</h1>)
}
export default Login;