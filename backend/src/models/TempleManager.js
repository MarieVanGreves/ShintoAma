const AbstractManager = require("./AbstractManager");

class TempleManager extends AbstractManager {
  constructor() {
    super({ table: "Temples" });
  }

  getAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  getById(templeId) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE Id = ?`, [
      templeId,
    ]);
  }

  create(temple) {
    return this.database.query(
      `INSERT INTO ${this.table} (Nom, Ville, Préfecture, Description, DateFondation, Adresse, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        temple.nom,
        temple.ville,
        temple.prefecture,
        temple.description,
        temple.dateFondation,
        temple.adresse,
        temple.imageUrl,
      ]
    );
  }

  update(templeId, temple) {
    return this.database.query(
      `UPDATE ${this.table} SET Nom=?, Ville=?, Préfecture=?, Description=?, DateFondation=?, Adresse=?, imageUrl=? WHERE Id=?`,
      [
        temple.nom,
        temple.ville,
        temple.prefecture,
        temple.description,
        temple.dateFondation,
        temple.adresse,
        temple.imageUrl,
        templeId,
      ]
    );
  }

  delete(templeId) {
    return this.database.query(`DELETE FROM ${this.table} WHERE Id=?`, [
      templeId,
    ]);
  }
}

module.exports = TempleManager;
