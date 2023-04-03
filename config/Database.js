import { Sequelize } from "sequelize";

const db = new Sequelize("crud_nodejs_mysql", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
