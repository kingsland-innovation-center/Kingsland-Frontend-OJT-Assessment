export const authenticatedMenuItems = [
  { title: "Dashboard", path: "/dashboard" },
  {
    title: "Students",
    subMenuItems: [
      { title: "List", path: "/students" },
      { title: "Add Student", path: "/students/add" },
    ],
  },
];

export const unauthenticatedMenuItems = [
  { title: "Home", path: "/" },
  { title: "Register", path: "/register" },
  { title: "Login", path: "/login" },
];
