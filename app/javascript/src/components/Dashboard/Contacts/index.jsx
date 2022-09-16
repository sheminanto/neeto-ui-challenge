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
import DeleteAlert from "./DeleteAlert";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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
              onClick={() => setShowNewContactPane(true)}
            />
          }
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Etc.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {CONTACTS.length ? (
          <Table setShowDeleteAlert={setShowDeleteAlert} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Conact"
            subtitle="Add your contacts to assign notes to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Contacts;
