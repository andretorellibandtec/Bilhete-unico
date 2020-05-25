create database totens;
use totens;

create table Empresa(
idEmpresa int primary key auto_increment,
Nome varchar (50),
Telefone varchar(50),
Senha varchar(50),
Endereco varchar(50)

);

create table Funcionario(
idFuncionario int primary key,
Nome varchar (50),
Adm boolean,
Fk_Empresa int,
foreign key (Fk_Empresa) references Empresa(idEmpresa)

);


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











