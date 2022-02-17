DROP DATABASE IF NOT EXISTS suplementos;

CREATE DATABASE IF NOT EXISTS suplementos;

USE suplementos;


CREATE TABLE clientes(
    id_cliente INTEGER NOT NULL PRIMARY KEY,
    nome VARCHAR(300) NOT NULL,
    senha VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nascimento DATE,
    endereco VARCHAR(300),
    imagem TEXT
) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE administrador(
    id_administrador INTEGER NOT NULL PRIMARY KEY,
    nome VARCHAR(300) NOT NULL,
    senha VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL,
    nascimento DATE,
    imagem TEXT
) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE suplementos(
    id_suplemento INTEGER NOT NULL PRIMARY KEY,
    id_cliente_pk INTEGER NOT NULL, 
    tipo VARCHAR(30) NOT NULL,
    nome VARCHAR(200) NOT NULL,
    preco INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    lancamento BOOLEAN,
    imagem TEXT
) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE promocoes(
    id_promocoes INTEGER NOT NULL PRIMARY KEY,
    id_suplementos_pk INTEGER NOT NULL,
    porcentagem VARCHAR(300) NOT NULL,
    dias INTEGER NOT NULL
) CHARACTER SET utf8 COLLATE utf8_general_ci;



