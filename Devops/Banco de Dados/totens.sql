create database totens;
use totens;
create table Empresa(
idEmpresa int primary key auto_increment,
empresa varchar (50),
CNPJ varchar(20),
Telefone varchar(20),
Email varchar(17),
Senha varchar(20),
CEP varchar(12),
Numero varchar(10),
createdAt date,
updatedAt date
);


create table Funcionario(
idFuncionario int primary key,
Nome varchar (50),
Cargo varchar (40),
Tipo varchar (15),
Email varchar (40),
Senha varchar (20),
Contato varchar (40),
Fk_Empresa int,
foreign key (Fk_Empresa) references Empresa(idEmpresa)

);

drop table Funcionario;


create table Endereco_Maquina(
idEnderecoMaquina int primary key,
Estacao varchar (50),
Terminal varchar (50),
Data_Hora Datetime

);


create table Maquina(
idMaquina int primary key,
Modelo varchar (50),
Sistema_Operacional varchar (50),
Serial_Number int,
Ram_Total int,
Disco_Total int,
Fk_Endereco_Maquina int,
Fk_Funcionario int,
foreign key (Fk_Endereco_Maquina) references Endereco_Maquina(idEnderecoMaquina),
foreign key (Fk_Funcionario) references Funcionario(idFuncionario)

);



create table Processos(
idProcessos int primary key,
Nome_Processo varchar (50),
PID int,
CPU_Porcentagem decimal(2),
Memoria_Porcentagem decimal(2),
Data_Hora Datetime,
Fk_Maquina int,
foreign key (Fk_Maquina) references Maquina(idMaquina)

);



create table Dados(
idDados int primary key,
CPU_Utilizada decimal(2),
Disco_Utilizada decimal(2),
Memoria_Utilizada decimal(2),
CPU_Temperatura decimal(2),
Data_Hora Datetime,
Fk_Maquina int,
foreign key (Fk_Maquina) references Maquina(idMaquina)

);











