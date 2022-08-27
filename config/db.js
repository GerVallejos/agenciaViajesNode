import  Sequelize  from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_HOST)


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DEB_PASS, {
           host: process.env.DN_HOST,
           port: '3306',
           dialect: 'mysql',
           define: {
                timestamps: false
           },
           pool: {
                max: 5,
                min: 0,
                aquire: 30000,
                idle: 10000
           },
           operatorAliases: false
});

export default db;