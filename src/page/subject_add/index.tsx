import { useEffect, useState } from "react";
import { TreeSelect, Button } from "antd";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import {
  get_subject_tree,
  select_subject_tree,
  set_subject_active_two,
} from "@/store/slice/subject";
import { AppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { select_active_two } from "@/store/slice/subject";
import LeftContent from "./leftContent";
import RightContent from "./rightContent";
export default function App() {
  const treeData = useSelector(select_subject_tree);
  const active_two_obj = useSelector(select_active_two);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(get_subject_tree()).then((res: any) => {
      const active_two_obj = res.payload[0].children[0];
      dispatch(
        set_subject_active_two(active_two_obj)
      );
    });
  }, []);

  const onChange = (newValue: string, nameArr: any) => {
    console.log(newValue, nameArr);
    dispatch(set_subject_active_two({ title: nameArr[0], value: newValue }));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        {" "}
        <div className={styles.top_left}>{active_two_obj.title}</div>
        <div className={styles.top_right}>
          <TreeSelect
            style={{ width: "100%" }}
            value={active_two_obj.value}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            treeData={treeData}
            placeholder="请选择课程类目"
            treeDefaultExpandAll
            onChange={onChange}
          />
          <Button type="primary" className={styles.add_button}>
            新增题目
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <LeftContent />
        </div>
        <div className={styles.right}>
          <RightContent />
        </div>
      </div>
    </div>
  );
}
