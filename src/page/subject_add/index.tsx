import { useEffect, useState } from "react";
import { TreeSelect, Button } from "antd";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { get_subject_tree, select_subject_tree } from "@/store/slice/subject";
import { AppDispatch } from "@/store";
import { useSelector } from "react-redux";
export default function App() {

  const dispatch:AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(get_subject_tree())
  }, []);
  const treeData = useSelector(select_subject_tree)
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        {" "}
        <div className={styles.top_left}>{}</div>
        <div className={styles.top_right}>
          <TreeSelect
            style={{ width: "100%" }}
value={value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData}
            placeholder="请选择课程类目"
            treeDefaultExpandAll
            onChange={onChange}
          />
          <Button type="primary" className={styles.add_button}>新增题目</Button>
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
