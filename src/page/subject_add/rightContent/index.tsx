import React from "react";
import styles from "./index.module.css";
import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
export default function RightContent() {
  const [form] = Form.useForm();
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
    </Form>
  );
}
