require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

const getAllDivinites = (callback) => {
  const sql = "SELECT * FROM Divinites";
  connection.query(sql, (err, result) => {
    if (err) {
      callback(err, result);
      return;
    }
    callback(err, result);
  });
};

const getDiviniteById = (id, callback) => {
  const sql = "SELECT * FROM Divinites WHERE Id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      callback(err, result);
      return;
    }
    callback(null, result[0]);
  });
};

const createDivinite = (nom, description, callback) => {
  const sql = "INSERT INTO Divinites (Nom, Description) VALUES (?, ?)";
  connection.query(sql, [nom, description], (err, result) => {
    if (err) {
      callback(err, result);
      return;
    }
    const newDiviniteId = result.insertId;
    callback(null, newDiviniteId);
  });
};

module.exports = {
  getAllDivinites,
  getDiviniteById,
  createDivinite,
};
