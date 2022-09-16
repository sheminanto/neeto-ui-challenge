import React from "react";

import { Typography, Pane } from "neetoui";

import Form from "./Form";

const Create = ({ showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h3"> Create New Contact</Typography>
      </Pane.Header>
      <Form onClose={onClose} />
    </Pane>
  );
};

export default Create;
