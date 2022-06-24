const local = {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
};

const rds = {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    host: process.env.RDS_HOST,
    dialect: "mysql",
};

export { local, rds };
