import dbPool from "../utils/db.js";

export const getData = () => {
  const sql =
    "SELECT user_id, name, email, password, address, created_at FROM users";

  return dbPool.query(sql);
};

export const createData = (name, email, password, address) => {
  let createdAt = new Date();
  const sql =
    "INSERT INTO users (name, email, password, address, created_at) VALUE(?, ?, ?, ?, ?)";
  const value = [name, email, password, address, createdAt];
  const result = dbPool.query(sql, value);

  return result;
};

export const updateData = (id, name, email, password, address) => {
  let createdAt = new Date();
  const sql =
    "UPDATE users SET name = ?, email = ?, password = ?,address = ? WHERE user_id = ?";
  const value = [id, name, email, password, address];
  const result = dbPool.query(sql, value);

  return result;
};

export const deleteData = (id) => {
  let createdAt = new Date();
  const sql = "DELETE FROM users where user_id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);

  return result;
};

export const getDataById = (id) => {
  const sql = "SELECT * FROM users WHERE user_id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);

  return result;
};
