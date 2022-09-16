import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose }) => {
  const handleDelete = () => {
    Toastr.success("Contact deleted successfully");
    onClose();
  };
  return (
    <Alert
      isOpen
      message="Are you sure you want to delete the contact? This action cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};
export default DeleteAlert;
