import Database from 'better-sqlite3';
import path from 'path';

const dbPath: string =
  process.env.NODE_ENV === 'development'
    ? './demo_table.db'
    : path.join(process.resourcesPath, './db.sqlite3');

const db = new Database(dbPath);

// Set the journal mode to WAL
db.pragma('journal_mode = WAL');

export default db;
