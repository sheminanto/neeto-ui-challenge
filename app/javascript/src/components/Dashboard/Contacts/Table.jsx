import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS } from "./constants";
import { buildTableColumnData } from "./utils";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    allowRowClick
    columnData={buildTableColumnData(setShowDeleteAlert)}
    currentPageNumber={1}
    defaultPageSize={6}
    rowData={CONTACTS}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);
export default Table;
