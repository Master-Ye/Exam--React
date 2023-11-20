import { useRef } from "react";
import styles from "./index.module.css";
import Upload from "./upload";
import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { upload_imgs } from "@/util";
import { useSelector } from "react-redux";
import { select_active_two } from "@/store/slice/subject";
import axios from "axios";
export default function RightContent() {
  const [form] = Form.useForm();
  let activeFile: any = useRef([]);
  const two_obj: any = useSelector(select_active_two);



  function fileChange(info: any) {
    console.log(info);
    activeFile.current = info;
  }
  async function submitClick() {
    //图片上传
    const formData = await form.validateFields();
    if (formData) {
      console.log(formData);
      if (activeFile.current?.fileList?.length) {
        const imgs_url_arr = await upload_imgs(activeFile);
        formData.img = imgs_url_arr;
      }
      formData.two_id = two_obj.value;

    }
    await axios.post("/api/topic",formData)
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 16 }}
      initialValues={{}}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "请输入" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="描述"
        name="doc"
        rules={[{ required: true, message: "请输入" }]}
      >
        <TextArea />
      </Form.Item>
      <Upload change={fileChange} />
      <Button danger onClick={submitClick}>
        保存
      </Button>
    </Form>
  );
}
