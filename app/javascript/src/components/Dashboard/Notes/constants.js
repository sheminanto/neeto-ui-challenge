import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: null,
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .nullable()
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string(),
        value: yup.string(),
      })
    )
    .nullable()
    .min(1)
    .required("Tag is required"),
});

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
    value: "getting_started",
    label: "Getting Started",
  },
  {
    value: "onboarding",
    label: "Onboarding",
  },
  {
    value: "user_flow",
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
    value: "ronald_richards",
    label: "Ronald Richards",
  },
  {
    value: "jacob_jones",
    label: "Jacob Jones",
  },
];
