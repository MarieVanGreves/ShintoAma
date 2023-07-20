const AbstractManager = require("./AbstractManager");

class DiviniteManager extends AbstractManager {
  constructor() {
    super({ table: "Divinites" });
  }

  findAll() {
    return this.database.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  insert(divinite) {
    return this.database.query(
      `INSERT INTO ${this.table} (nom, description, attributs) VALUES (?, ?, ?)`,
      [divinite.nom, divinite.description, divinite.attributs]
    );
  }

  update(divinite) {
    return this.database.query(
      `UPDATE ${this.table} SET nom = ?, description = ?, attributs = ? WHERE id = ?`,
      [divinite.nom, divinite.description, divinite.attributs, divinite.id]
    );
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = DiviniteManager;
