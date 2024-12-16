const { PrismaClient } = require("@prisma/client");

class DataBase {
  static instance;

  static getInstance() {
    if (!DataBase.instance) {
        DataBase.instance = new PrismaClient();
    }
    return DataBase.instance;
  }
}

module.exports = DataBase;
