import * as yup from "yup";

export const CONTACTS = [
  {
    id: 1,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
    profileImage: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
  },
  {
    id: 3,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
    profileImage: "https://i.pravatar.cc/300",
  },
  {
    id: 4,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
  },
  {
    id: 5,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
    profileImage: "https://i.pravatar.cc/300",
  },
  {
    id: 6,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
  },
  {
    id: 7,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
    profileImage: "https://i.pravatar.cc/300",
  },
  {
    id: 8,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
  },
  {
    id: 9,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
    profileImage: "https://i.pravatar.cc/300",
  },
  {
    id: 10,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
  },
  {
    id: 11,
    name: "Ronald Richards",
    role: "Owner",
    email: "ronald@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
    profileImage: "https://i.pravatar.cc/300",
  },
  {
    id: 12,
    name: "Jacob Jones",
    role: "Owner",
    email: "jacob@example.com",
    createdAt: "2022-09-14T09:26:46.484Z",
  },
];

export const CONTACTS_MENUBAR_USER_CATEGORIES = [
  {
    label: "All",
    count: 90,
    isActive: true,
  },
  {
    label: "Users",
    count: 30,
    isActive: false,
  },
  {
    label: "Leads",
    count: 30,
    isActive: false,
  },
  {
    label: "Visitors",
    count: 30,
    isActive: false,
  },
];
export const CONTACTS_MENUBAR_SEGMENTS = [];

export const CONTACTS_MENUBAR_TAGS = [];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACTS_FORM_ROLES_DATA = [
  { label: "Admin", value: "admin" },
  { label: "User", value: "user" },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  role: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(CONTACTS_FORM_ROLES_DATA.map(role => role.label)),
      value: yup
        .string()
        .oneOf(CONTACTS_FORM_ROLES_DATA.map(role => role.value)),
    })
    .nullable()
    .required("Role is required"),
});
