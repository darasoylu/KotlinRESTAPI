import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(user);
  console.log(user);
};

export const getUsers = (req, res) => {
  res.send(users);
  console.log(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User ${id} deleted`);
};

//PATCH
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, image } = req.body;
  const user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;
  if (image) user.image = image;
  res.send(`User ${id} updated: ${firstName},${lastName},${age}, ${image}`);
};
