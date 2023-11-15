import { InboxOutlined } from "@ant-design/icons"
import {  Upload } from "antd"

const { Dragger } = Upload

export default function UploadCp(props:any) {
const config = {
    name: 'file',
    onChange(info: any) {
        const { status } = info.file;
        console.log(info)
        props.change(info)
    },
    onDrop(e:any){
        console.log("onDrop",e.dataTransfer.files)

    },
    customRequest(option:any){
        const urlData = URL.createObjectURL(option.file)
        option.onSuccess()
    },
    maxCount:1,
    beforeUpload:()=>{
        return false
    },
    multiple:true
}
    return(
    <div>
        <Dragger {...config}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽文件到这里上传</p>
            <p className="ant-upload-hint">请上传图片</p>
        </Dragger>
    </div>)
}