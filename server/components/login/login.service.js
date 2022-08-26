const db = require('../../config/dbConnect');

const loginGet = ('/', (req, res) => {
});

const loginPost = ('/', (req, res) => {
    const email = req.body.email;
    const pw = req.body.pw;
    if (email && pw) {
        db.query('SELECT * FROM users WHERE email=? AND pw =?', [email, pw], (err, row) => {
            if (err) {
                return err;
            }
            if (row.length > 0) {
                res.status(200).json({ message: '로그인 성공', status: 200 });
                res.end();
            }
            else {
                console.log("로그인이 실패 하였습니다. 다시 시도 하요 주십시요");
            }
        })
    }

    // res.end();
})

module.exports = { loginGet, loginPost }
