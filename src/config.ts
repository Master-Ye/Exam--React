type RouterDataType = typeof routerData;
export type RouterKeys = keyof RouterDataType;
export const routerData = {
  login: {
    path: "/login",
    hasMenu: false,
  },
  admin_manage: {
    path: "/admin_manage",
    hasMenu: true,
  },
  correct_exam: {
    path: "/correct_exam/:exam_id",
    hasMenu: true,
  },
  correct_exam_list: {
    path: "/correct_exam_list",
    hasMenu: false,
  },
  exam: {
    path: "/exam/:exam_id",
    hasMenu: true,
  },
  exam_history: {
    path: "/exam_history",
    hasMenu: true,
  },
  exam_select: {
    path: "/exam_select",
    hasMenu: true,
  },
  person_info: {
    path: "/person_info",
    hasMenu: false,
  },
  read_exam: {
    path: "/read_exam/:exam_id",
    hasMenu: true,
  },
  student_manage: {
    path: "/student_manage",
    hasMenu: true,
  },
  subject_add: {
    path: "/subject_add",
    hasMenu: true,
  },
  subject_manage: {
    path: "/subject_manage",
    hasMenu: true,
  },
};
export const studentMenus = [
  {
    label: "考题选择",
    key: "exam_select",
  },
  {
    label: "考试记录",
    key: "exam_history",
  },
];
export const adminMenus = [
  {
    label: "阅卷管理",

    key: "correct_exam_list",
  },
  {
    label: "考题管理",

    key: "subject_add",
  },
  {
    label: "课程管理",

    key: "subject_manage",
  },
  {
    label: "学员管理",

    key: "student_manage",
  },
];
export const superAdminMenus = [
  {
    label: "阅卷管理",
    key: "correct_exam_list",
  },
  {
    label: "考题管理",
    key: "subject_add",
  },
  {
    label: "课程管理",
    key: "subject_manage",
  },
  {
    label: "学员管理",
    key: "student_manage",
  },
  {
    label: "管理员管理",
    key: "admin_manage",
  },
];
