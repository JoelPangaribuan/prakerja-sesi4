import { successResponse, errorResponse } from "../utils/response.js";
import { nanoid } from "nanoid";
import * as UserRepo from "../respository/user.js";

const users = [];

export const addUser = (req, res, next) => {
  let id = nanoid(6);
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let address = req.body.address;
  let created_at = req.body.created_at;

  let user = {
    id,
    name,
    email,
    password,
    address,
    created_at,
  };
  users.push(user);

  if (users.length > 0) {
    successResponse(res, "berhasil menambahkan user", user);
  } else {
    errorResponse(res, "gagal menambahkan user", 500);
  }
};

export const getUser = async (req, res, next) => {
  const [result] = await UserRepo.getData();

  successResponse(res, "success", result);
};

export const updateUser = (req, res, next) => {
  let id = req.params.id;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let address = req.body.address;
  let created_at = req.body.created_at;
  let index = users.findIndex((item) => item.id == id);
  if (index > -1) {
    let user = users[index];
    user.name = name;
    user.email = email;
    user.password = password;
    user.address = address;
    user.created_at = created_at;

    successResponse(res, "berhasil update user", index);
  } else {
    errorResponse(res, "user tidak ditemukan");
  }
};

export const deleteUser = (req, res, next) => {
  let id = req.params.id;
  let index = users.findIndex((item) => item.id == id);

  if (index > -1) {
    let user = users[index];

    users.splice(index, 1);

    successResponse(res, "berhasil hapus user", user);
  } else {
    errorResponse(res, "user tidak ditemukan");
  }
};

export const getUserById = async (req, res, next) => {
  const [result] = await UserRepo.getDataById();

  successResponse(res, "success", result);
};
