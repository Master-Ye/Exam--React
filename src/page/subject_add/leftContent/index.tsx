import { useDispatch, useSelector } from "react-redux"
import styles from "./index.module.css"
import { select_active_two } from "@/store/slice/subject"
import axios from "axios"
import { select_topic_two_list,get_topic_two_list } from "@/store/slice/subject"

function LeftContent(){
const topic_two_list = useSelector(select_topic_two_list)
const two_obj:any = useSelector(select_active_two)
const dispatch = useDispatch()
async function delete_click(id:string){
  await axios.delete(`/api/topic/${id}`)
  dispatch(get_topic_two_list(two_obj.value))
}
return (<div className="{styles.wrap}">
  {topic_two_list.map((item:any)=>{return (<div className="{styles.item}">
    <div className="{styles.left}">
      {item.title}
    </div>
    <div onClick={()=>{delete_click(item._id)}} className={styles.right_span}>
      <span>删除</span>
    </div>
  </div>)})}
</div>)
}
export default LeftContent