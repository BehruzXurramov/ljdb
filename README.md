# Local JSON Database (LJDB)

Local JSON Database (LJDB) is a simple JSON-based database that loads data into RAM for fast access.

## Installation

```sh
npm install ljdb
```

## Usage

```javascript
const LJDB = require("ljdb");

// Create or open a database
const db = new LJDB("mydatabase");

// Read data from file
console.log(db.read());

// Modify data in RAM
db.data.users = [{ name: "Ali", age: 25 }];

// Save changes to file
db.save();

// Delete the database file
LJDB.deleteDB("mydatabase");
```

## Features
- Stores data in a JSON file
- Loads data into RAM for fast access
- Simple and easy to use
- Supports reading, modifying, and deleting data

## License
MIT

