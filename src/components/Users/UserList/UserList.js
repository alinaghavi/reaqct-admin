import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  EditButton,
} from "react-admin";

import MyUrlField from "../../Fields/MyUrlField/MyUrlField";

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <UrlField source="website" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UserList;
