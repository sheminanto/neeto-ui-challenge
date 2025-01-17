import React from "react";

import dayjs from "dayjs";
import { MenuVertical } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

export const formatTime = dateTime => dayjs(dateTime).format("MMM, D, YYYY");

export const buildTableColumnData = setShowDeleteAlert => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30",
    render: (name, { role, profileImage }) => (
      <div className="flex flex-row items-center">
        <Avatar
          className="mr-2"
          size="large"
          user={{ name, imageUrl: profileImage }}
        />
        <div className="flew flex-col">
          <Typography style="h5"> {name}</Typography>
          <Typography style="body3">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "20",
    render: createdAt => (
      <Typography style="body3">{formatTime(createdAt)}</Typography>
    ),
  },
  {
    title: "",
    dataIndex: "options",
    key: "options",
    width: "20",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
      </Dropdown>
    ),
  },
];
