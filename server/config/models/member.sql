-- DATABASE jihoon 유저로그인관리
CREATE TABLE 'users'(
'id' CHAR(40) ,
'name' CHAR(20) NOT NULL,
'email' CHAR(60) NOT NULL,
'pw' CHAR(40) NOT NULL,
PRIMARY KEY(email)
)CHARSET=utf8;

--  host: "localhost",
--     user: 'root',
--     password: '12345',
--     port: '3306',
--     database: 'jihoon'

-- DATABASE jihoon
CREATE TABLE 'contract'(
'id' int(11) NOT NULL AUTO_INCREMENT,
'constract_adress' VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
)CHARSET=utf8;
