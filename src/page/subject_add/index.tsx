import React, { useState } from "react";
import { TreeSelect, Button } from "antd";
import styles from "./index.module.css";

export default function App() {
  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-1",
        },
        {
          title: "Child Node2",
          value: "0-0-2",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
    },
  ];
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        {" "}
        <div className={styles.top_left}>基础网络技术</div>
        <div className={styles.top_right}>
          <TreeSelect
            style={{ width: "100%" }}
            value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />
          <button className={styles.add_button}>新增题目</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className=""></div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}
