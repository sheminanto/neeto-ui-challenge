import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FORM_ROLES_DATA,
  CONTACTS_FORM_VALIDATION_SCHEMA,
  CONTACTS_FORM_INITIAL_FORM_VALUES,
} from "../constants";

const Form = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact added successfully");
  };
  return (
    <Formik
      initialValues={CONTACTS_FORM_INITIAL_FORM_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full flex-row items-center justify-between gap-5">
              <Input
                required
                className="w-full"
                label="First Name"
                name="firstName"
              />
              <Input
                required
                className="w-full"
                label="Last Name"
                name="lastName"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={CONTACTS_FORM_ROLES_DATA}
              size="small"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
