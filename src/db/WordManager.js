import db from './DBManager';

const readAllPerson = () => {
  try {
    const query = `SELECT * FROM coppied_text `;
    const readQuery = db.prepare(query);
    const rowList = readQuery.all();
    return rowList;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const insertPerson = (name, age) => {
  try {
    const insertQuery = db.prepare(
      `INSERT INTO coppied_words (text, age) VALUES ('${name}' , ${age})`,
    );

    const transaction = db.transaction(() => {
      const info = insertQuery.run();
      console.log(
        `Inserted ${info.changes} rows with last ID 
                 ${info.lastInsertRowid} into person`,
      );
    });
    transaction();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  readAllPerson,
  insertPerson,
};
