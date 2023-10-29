import "./App.sass";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/page/login";
import Layout from "./common_components/layout";
import { routerData } from "./config";
import AdminManager from "@/page/admin_manage";
import ExamCorrect from "@/page/correct_exam";
import ReadExam from "@/page/read_exam";
import ExamSelect from "@/page/exam_select";
import Exam from "@/page/exam";
import SubjectAdd from "@/page/subject_add";
import SubjectManage from "@/page/subject_manage";
import StudentManage from "@/page/student_manage";
import PersonInfo from "@/page/person_info";
import CorrectExam from "@/page/correct_exam";
import ExamHistory from "@/page/exam_history";
import CorrectExamList from "@/page/correct_exam_list";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path={routerData.login.path} element={<Login />} />
        <Route path={routerData.admin_manage.path} element={<AdminManager />} />
        <Route path={routerData.correct_exam.path} element={<ExamCorrect />} />
        <Route path={routerData.read_exam.path} element={<ReadExam />} />
        <Route path={routerData.exam.path} element={<Exam />} />
        <Route path={routerData.subject_add.path} element={<SubjectAdd />} />
        <Route
          path={routerData.subject_manage.path}
          element={<SubjectManage />}
        />
        <Route path={routerData.person_info.path} element={<PersonInfo />} />
        <Route
          path={routerData.student_manage.path}
          element={<StudentManage />}
        />
        <Route path={routerData.exam_history.path} element={<ExamHistory />} />
        <Route path={routerData.correct_exam.path} element={<CorrectExam />} />
        <Route
          path={routerData.correct_exam_list.path}
          element={<CorrectExamList />}
        />
        <Route path={routerData.exam_select.path} element={<ExamSelect />} />
      </Route>
    </Routes>
  );
}

export default App;
