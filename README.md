# phonebook-react
* #### test api 
```json
{
  users {
    userName
    Name
    Age
  }
}


mutation {
  addUser(userName: "green", Name: "barry allan", Age: "17") {
    userName
    Name
    Age
  }
}


mutation {
  updateUser(userName: "green", Name: "peter", Age: "30") {
    userName
    Name
    Age
  }
}


mutation {
  removeUser(userName: "green") {
    userName
  }
  ```
