import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import UserList from "./components/Users/UserList/UserList";
import PostList from "./components/Posts/PostList/PostList";
import PostEdit from "./components/Posts/PostEdit/PostEdit";
import UserEdit from "./components/Users/UserEdit/UserEdit";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} />
      <Resource name="users" list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
