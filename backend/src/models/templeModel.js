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

const getAllTemples = (callback) => {
  const sql = "SELECT * FROM Temples";
  connection.query(sql, (err, result) => {
    if (err) {
      callback(err, result);
      return;
    }
    callback(null, result);
  });
};

const getTempleById = (id, callback) => {
  const sql = "SELECT * FROM Temples WHERE Id = ?";
  connection.query(sql, [id], (err, result) => {
    if (err) {
      callback(err, result);
      return;
    }
    callback(null, result[0]);
  });
};

const createTemple = (
  nom,
  ville,
  prefecture,
  description,
  dateFondation,
  adresse,
  callback
) => {
  const sql =
    "INSERT INTO Temples (Nom, Ville, Préfecture, Description, DateFondation, Adresse) VALUES (?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [nom, ville, prefecture, description, dateFondation, adresse],
    (err, result) => {
      if (err) {
        callback(err, result);
        return;
      }
      const newTempleId = result.insertId;
      callback(null, newTempleId);
    }
  );
};

module.exports = {
  getAllTemples,
  getTempleById,
  createTemple,
};
