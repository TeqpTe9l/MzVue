const fastify = require("fastify")({ logger: true });
const mysql = require("mysql2");
const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "danil",
    database: "Myzschool",
    password: "danil2003",
    dateStrings: true
});
global.pool = pool;

fastify.register(require('fastify-cors'), {
    origin: true
})

fastify.get("/stud", async(req, res) => {
    pool.query("SELECT * FROM Mzstud", (err, result) => {
        if (err) return console.log(err)
        res.send(result)
    })
})

fastify.post("/stud/CreateStud", async(req, res) => {
    if (!req.body) return (res.sendStatus(400));
    const params = [req.body.Фамилия, req.body.Имя, req.body.Отчество, req.body.Дата_рождения, req.body.Адрес, req.body.Номер_телефона, req.body.Класс, req.body.Балл_учащегося, req.body.Срок_обучения, ];
    pool.query("INSERT INTO Mzstud (Фамилия, Имя, Отчество, Дата_рождения, Адрес, Номер_телефона, Класс, Балл_учащегося, Срок_обучения) VALUES (?,?,?,?,?,?,?,?,?)", params, function(err, data) {
        if (err) return console.log(err);
        res.send(data)
    });
});

fastify.get("/teacher", async(req, res) => {
    pool.query("SELECT * FROM Mzteacher", (err, result) => {
        if (err) return console.log(err)
        res.send(result)
    })
})

fastify.post("/teacher/CreateTeacher", async(req, res) => {
    if (!req.body) return (res.sendStatus(400));
    const params = [req.body.Фамилия, req.body.Имя, req.body.Отчество, req.body.Дата_рождения, req.body.Должность, req.body.Зарплата, req.body.Номер_телефона, req.body.Стаж, req.body.Адрес, ];
    pool.query("INSERT INTO Mzteacher (Фамилия, Имя, Отчество, Дата_рождения, Должность, Зарплата, Номер_телефона, Стаж, Адрес) VALUES (?,?,?,?,?,?,?,?,?)", params, function(err, data) {
        if (err) return console.log(err);
        res.send(data)
    });
});

const start = async() => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()