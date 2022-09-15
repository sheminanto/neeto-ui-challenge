import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_TABLE_COLUMN_DATA } from "./TableColumn";

const Table = ({ contacts }) => (
  <NeetoUITable
    allowRowClick
    columnData={CONTACTS_TABLE_COLUMN_DATA}
    rowData={contacts}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);
export default Table;
