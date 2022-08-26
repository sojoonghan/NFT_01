실행명령어 server 폴더에서
npm run prebuild && npm start
실행을 하고 나면 server 폴더에 build 폴더가 생성이된다 다시실행하려면 server에서 build 폴더를 지우고 다시 실행

터미널에서 mysql 다운
mysql 초기설정해주고
mysql.server start
DB이름 설정 이랑 table 구조설정 해주면 됩니다

DB이름 Table 구조
-- DATABASE nft
CREATE TABLE users(
id CHAR(40) ,
name CHAR(20) NOT NULL,
email CHAR(60) NOT NULL,
pw CHAR(40) NOT NULL,
PRIMARY KEY(email)
)CHARSET=utf8;

npm install ipfs
ipfs daemon

metamask 크롬에 설치
