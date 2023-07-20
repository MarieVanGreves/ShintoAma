require("dotenv").config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const database = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

const getAllTemples = async () => {
  const [result] = await database.query("SELECT * FROM Temples");
  return result;
};

const getTempleById = (id, callback) => {
  const sql = "SELECT * FROM Temples WHERE Id = ?";
  database.query(sql, [id], (err, result) => {
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
  imageUrl,
  callback
) => {
  const sql =
    "INSERT INTO Temples (Nom, Ville, Préfecture, Description, DateFondation, Adresse, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?)";
  database.query(
    sql,
    [nom, ville, prefecture, description, dateFondation, adresse, imageUrl],
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
