import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Typography, Tag, Avatar, Tooltip, Dropdown } from "neetoui";

import { formatTime, calculateCreatedAgo } from "./utils";

const Card = ({ note, setSelectedNote, setShowEditNote }) => {
  const { title, description, created_at: createdAt } = note;

  const showEditPane = () => {
    setSelectedNote(note);
    setShowEditNote(true);
  };

  return (
    <div className="mb-4 w-full flex-col rounded-md border  bg-white p-4 shadow-md">
      <div className="mb-2 ">
        <div className="mb-2 flex items-center justify-between">
          <Typography style="h4">{title}</Typography>
          <Dropdown buttonStyle="text" icon={MenuVertical}>
            <li onClick={showEditPane}>Edit</li>
            <li>Delete</li>
          </Dropdown>
        </div>
        <Typography style="body2">{description}</Typography>
      </div>
      <hr />
      <div className="mt-3 flex  justify-between">
        <Tag color="gray" label="Getting Started" size="small" />
        <div className="flex flex-row items-center gap-x-1.5">
          <Clock size={10} />
          <Tooltip content={formatTime(createdAt)} position="bottom">
            <Typography style="body3">
              Created {calculateCreatedAgo(createdAt)}
            </Typography>
          </Tooltip>
          <Avatar
            size="medium"
            user={{
              imageUrl: "https://i.pravatar.cc/300",
            }}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
