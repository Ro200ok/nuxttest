const mysql = require('mysql2');
import { query } from 'express';
import conf from './config.js'



let dbprovider = {}; 


dbprovider.getUsers = 
    new Promise( (resolve, reject) => {
        let connection = mysql.createConnection( conf ).promise();
        connection.query('SELECT * FROM users').then( ([rows, fields]) => {
            connection.end();
            resolve( rows );
          }).catch ( err => {
            connection.end();
            reject(err);
          });
          
    }); 



  export default  dbprovider