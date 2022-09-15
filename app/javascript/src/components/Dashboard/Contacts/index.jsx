import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menu from "components/Dashboard/Menu";

import {
  CONTACTS,
  CONTACTS_MENUBAR_USER_CATEGORIES,
  CONTACTS_MENUBAR_SEGMENTS,
  CONTACTS_MENUBAR_TAGS,
} from "./constants";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Menu
        segments={CONTACTS_MENUBAR_SEGMENTS}
        showMenu={showMenu}
        tags={CONTACTS_MENUBAR_TAGS}
        title="Contacts"
        userCategories={CONTACTS_MENUBAR_USER_CATEGORIES}
      />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
          title="Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => {}}
            />
          }
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Etc.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS.length ? (
          <Table contacts={CONTACTS} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Conact"
            subtitle="Add your contacts to assign notes to them."
            title="Looks like you don't have any notes!"
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
