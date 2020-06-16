// module.exports = {
//   development: {
//     username: 'localadmin@svrsingletec',
//     password: '#Gfgrupo3b',
//     database: 'bdsingletec',
//     host: 'svrsingletec.database.windows.net',
//     dialect: 'mssql'
//   }
// }

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
    username: 'localadmin@svrsingletec',  
    password: '#Gfgrupo3b',
    database: 'bdsingletec',
    host: 'svrsingletec.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    }, 
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};