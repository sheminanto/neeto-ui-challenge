import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  NOTES_FORM_TAGS_DATA,
  NOTES_FORM_CONTACTS_DATA,
} from "../constants";

const NoteForm = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter note title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={2}
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignedContact"
              options={NOTES_FORM_CONTACTS_DATA}
              placeholder="Select Contact"
              size="small"
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={NOTES_FORM_TAGS_DATA}
              placeholder="Select Tags"
              size="small"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save Changes"}
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
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
