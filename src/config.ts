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
