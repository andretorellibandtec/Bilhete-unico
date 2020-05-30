create database cadastroprojeto;
use cadastroprojeto;
   
drop table usuario;
   
create table usuario(
id int primary key auto_increment,
nome varchar(50),
login varchar(20),
senha varchar(15)   
);

select * from usuario;


create table contato(
id_user int primary key auto_increment,
nome_user varchar(50),
email varchar(20),
mensagem text  
);


select * from contato;




