module.exports = {
  development: {
    username: 'localadmin@svrsingletec',
    password: '#Gfgrupo3b',
    database: 'bdsingletec',
    host: 'svrsingletec.database.windows.net',
    dialect: 'mssql',
    dialectOptions: { 
      options: {
        encrypt: true
      }
    }
  } 
};