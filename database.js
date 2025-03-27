const mysql = require('mysql2/promise');

class Database {
    constructor(){
        this.pool = mysql.createPool({
            hosdt: 'localhost',
            user: 'root',
            password: '',
            database: 'loja_esporte',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async query(sql, params) {
        try {
            const [rows] = await this.pool.execute(sql, params);
            return rows;
        }catch(error) {
            console.log("Erro na query: ", error);
            throw error;
        }
    }
}

modulo.exports = new Database();