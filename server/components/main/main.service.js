const db = require('../../config/dbConnect')

const main = ('/', (req, res) => {
    res.sendFile(__dirname + '../../build/index.html')
})
const register = ('/', (req, res) => {
    const query = {
        'name': req.body.name,
        'email': req.body.email,
        'pw': req.body.pw
    }
    const sql = 'INSERT INTO users set ?';
    db.query(sql, query, (err, row) => {
        if (err) { console.log(err) } else {
            res.status(200).json({ message: '로그인 성공', status: 200 });
            res.end();
        }
    })
})
module.exports = { main, register }