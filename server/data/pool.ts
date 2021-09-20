import mariadb from 'mariadb';

export default mariadb.createPool({
  host: 'localhost',
  port: 3306,
  database: 'redstar',
  user: 'root',
  password: 'e1isaveta',
  connectionLimit: 5
});