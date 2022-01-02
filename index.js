
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const mypw = "sys"  // set mypw to the hr schema password
var responses = [];
async function run(req) {

  let connection;

  try {
    connection = await oracledb.getConnection( {
      user          : "sys",
      password      : mypw,
      privilege: oracledb.SYSDBA,
      connectString : "localhost:1521/orcl"
    });

    const result = await connection.execute(
      req
    );

    var str = JSON.stringify(result.rows);
    var strJSON = JSON.parse(str);
    responses = strJSON;
    console.log(responses);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
 
    return responses;
  
}


  
  
module.exports.run = run;
