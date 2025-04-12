const fs = require("fs");
const path = require("path");

class LJDB {
  constructor(dbName) {
    if (!dbName) {
      throw new Error("dbName can't be empty");
    }

    this.dbDir = path.join(process.cwd(), "ljdb");
    this.dbPath = path.join(this.dbDir, `${dbName}.json`);

    if (!fs.existsSync(this.dbDir)) {
      fs.mkdirSync(this.dbDir);
    }

    if (!fs.existsSync(this.dbPath)) {
      fs.writeFileSync(this.dbPath, "{}", "utf8");
    }

    this.data = this.read();
  }

  read() {
    let data = fs.readFileSync(this.dbPath, "utf8");

    if (!data) {
      data = "{}";
      this.data = {};
      this.save();
    }

    return JSON.parse(data);
  }

  save() {
    fs.writeFileSync(this.dbPath, JSON.stringify(this.data, null, 2), "utf8");
  }

  static deleteDB(dbName) {
    const dbPath = path.join(process.cwd(), "ljdb", `${dbName}.json`);

    if (fs.existsSync(dbPath)) {
      fs.unlinkSync(dbPath);
    }
  }
}

module.exports = LJDB;
