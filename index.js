const fs = require("fs");
const path = require("path");

class LJDB {
  constructor(dbName) {
    this.dbDir = path.join(process.cwd(), "ljdb");
    this.dbPath = path.join(this.dbDir, `${dbName}.json`);

    if (!fs.existsSync(this.dbDir)) {
      fs.mkdirSync(this.dbDir);
    }

    if (!fs.existsSync(this.dbPath)) {
      fs.writeFileSync(this.dbPath, "{}", "utf8");
    }

    this.db = this.read();
  }

  read() {
    const data = fs.readFileSync(this.dbPath, "utf8");
    return JSON.parse(data);
  }

  save() {
    fs.writeFileSync(this.dbPath, JSON.stringify(this.db, null, 2), "utf8");
  }

  static deleteDB(dbName) {
    const dbPath = path.join(process.cwd(), "ljdb", `${dbName}.json`);

    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
  }
}

module.exports = LJDB;
