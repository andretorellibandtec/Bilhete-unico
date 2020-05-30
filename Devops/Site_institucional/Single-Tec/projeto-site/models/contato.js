'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Contato = sequelize.define('Contato', {
        id_user: {
            field: 'id_user',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_user: {
            field: 'nome_user',
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            field: 'email',
            type: DataTypes.STRING,
            allowNull: false
        },
        mensagem: {
            field: 'mensagem',
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
        {
            tableName: 'contato',
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        });

    return Contato;
};
