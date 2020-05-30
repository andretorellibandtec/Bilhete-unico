module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'root',
    password: 'password',
    database: 'cadastroprojeto',
    host: '0.0.0.0',
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
  }
};
