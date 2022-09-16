import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_FORM_TAGS_DATA = [
  {
    value: "getting-started",
    label: "Getting Started",
  },
  {
    value: "onboarding",
    label: "Onboarding",
  },
  {
    value: "user-flow",
    label: "User Flow",
  },
  {
    value: "ux",
    label: "UX",
  },
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "v2",
    label: "V2",
  },
];

export const NOTES_FORM_CONTACTS_DATA = [
  {
    value: "ronald-richards",
    label: "Ronald Richards",
  },
  {
    value: "jacob-ones",
    label: "Jacob Jones",
  },
];

export const NOTES_MENUBAR_USER_CATEGORIES = [
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

export const NOTES_MENUBAR_SEGMENTS = [
  {
    label: "Europe",
    count: 30,
  },
  {
    label: "Middle-East",
    count: 30,
  },
  {
    label: "Asia",
    count: 30,
  },
];

export const NOTES_MENUBAR_TAGS = [
  {
    label: "Sales",
    count: 30,
  },
  {
    label: "Finance",
    count: 30,
  },
  {
    label: "User Experience",
    count: 30,
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup
        .string()
        .oneOf(NOTES_FORM_CONTACTS_DATA.map(contact => contact.label)),
      value: yup
        .string()
        .oneOf(NOTES_FORM_CONTACTS_DATA.map(contact => contact.value)),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(NOTES_FORM_TAGS_DATA.map(tag => tag.label)),
        value: yup.string().oneOf(NOTES_FORM_TAGS_DATA.map(tag => tag.value)),
      })
    )
    .min(1)
    .required("Tag is required"),
});
