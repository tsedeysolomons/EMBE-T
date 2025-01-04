// prisma.js
const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "production") {
  // Create a new PrismaClient instance in production
  prisma = new PrismaClient();
} else {
  // Use a global variable to maintain a single instance in development
  if (!global.__prisma) {
    global.__prisma = new PrismaClient();
  }
  prisma = global.__prisma;
}

module.exports = prisma;
