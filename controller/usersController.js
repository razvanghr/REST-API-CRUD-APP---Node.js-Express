import { v4 as uuidv4 } from "uuid";

const users = [];

export const getUsers = (req, res) => {
  if (users.length) {
    res.status(202).send(users);
  } else {
    res.status(404).send("Nu exista persoane in baza de date :(");
  }
};

export const CreateUser = (req, res) => {
  const userBody = req.body;
  users.push({ ...userBody, id: uuidv4() });
  res.status(200).send("Persoana a fost adaugata in baza de date :)");
};

export const findById = (req, res) => {
  const { id } = req.params;

  const userFound = users.find((user) => user.id === id);
  if (userFound) {
    res.status(201).send(userFound);
  } else {
    res.status(404).send(`Persoana nu se afla in baza de date :(`);
  }
};

export const deleteById = (req, res) => {
  const { id } = req.params;
  const userFound = users.find((user) => user.id === id);
  if (userFound) {
    res.status(202).send(`Persoana cu id-ul ${id} a fost stearsa`);
    users.pop(userFound);
  } else {
    res
      .status(404)
      .send(`Persona cu id-ul ${id} , nu a fost gasita / nu poate fi stearsa`);
  }
};

export const patchById = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  const { firstName, lastName, age } = req.body;

  if (user) {
    if (firstName) user.firstName = firstName;
    if (lastName) user.firstName = lastName;
    if (age) user.age = age;

    res.status(200).send(`Persona cu id ${id} a fost modificata`);
  } else {
    res
      .status(404)
      .send(
        "Datele persoanei nu pot fi modificate / persoan nu se afla in baza de date"
      );
  }
};
