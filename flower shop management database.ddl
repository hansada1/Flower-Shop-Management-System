CREATE DATABASE flower_shop_management_database;

USE flower_shop_management_database;

CREATE TABLE login (
    lid VARCHAR(4) PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20)
);

CREATE TABLE Distributor (
    did VARCHAR(4) PRIMARY KEY,
    dname VARCHAR(20),
    dlocation VARCHAR(20),
    dphone VARCHAR(12)
);

CREATE TABLE Flower_Item (
    fid VARCHAR(4) PRIMARY KEY,
    fname VARCHAR(20),
    fcolour VARCHAR(20),
    fprice INT,
    season VARCHAR(8),
    did VARCHAR(4),
    FOREIGN KEY (did) REFERENCES Distributor(did)
);

CREATE TABLE Customer (
    CID VARCHAR(4) PRIMARY KEY,
    cname VARCHAR(20),
    clocation VARCHAR(20),
    cphone VARCHAR(20)
);

CREATE TABLE Flower_Order (
    Oid VARCHAR(4) PRIMARY KEY,
    fid VARCHAR(4),
    CID VARCHAR(4),
    Odate VARCHAR(8),
    Ddate VARCHAR(8),
    AAmount INT,
    FOREIGN KEY (fid) REFERENCES Flower(fid),
    FOREIGN KEY (CID) REFERENCES Customer(CID)
);

CREATE TABLE Stock (
    SID VARCHAR(4) PRIMARY KEY,
    FID VARCHAR(4),
    Quantity VARCHAR(4),
    Date VARCHAR(4),
    FOREIGN KEY (FID) REFERENCES Flower(FID)
);

CREATE TABLE Sale (
    SID VARCHAR(4) PRIMARY KEY,
    OID VARCHAR(4),
    D_N VARCHAR(4),
    FOREIGN KEY (OID) REFERENCES Order(OID)
);

CREATE TABLE Payment (
    PID VARCHAR(4) PRIMARY KEY,
    OID VARCHAR(4),
    PAmount INT,
    RAmount INT,
    FOREIGN KEY (OID) REFERENCES Order(OID)
);

CREATE TABLE Employee (
    EID VARCHAR(4) PRIMARY KEY,
    Ename VARCHAR(20),
    Egender VARCHAR(4),
    EAge VARCHAR(4),
    EDesignation VARCHAR(20),
    EHName VARCHAR(20),
    Eplace VARCHAR(20),
    Ephone VARCHAR(20),
    EDistrict VARCHAR(20),
    Estate VARCHAR(20)
);

CREATE TABLE Salary (
    SAID VARCHAR(4) PRIMARY KEY,
    EID VARCHAR(4),
    Date VARCHAR(8),
    Amount INT,
    FOREIGN KEY (EID) REFERENCES Employee(EID)
);
