const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

const db = new Database(path.join(__dirname, '../data/database.sqlite'));

// 初始化数据库表
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    status TEXT DEFAULT 'active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS pipeline_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    points INTEGER DEFAULT 0,
    user_id INTEGER,
    status TEXT DEFAULT 'pending',
    file_path TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    original_name TEXT,
    size INTEGER,
    mime_type TEXT,
    file_path TEXT NOT NULL,
    user_id INTEGER,
    download_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

// 用户模型
const userModel = {
  create: (userData) => {
    const { email, password, name, company, phone } = userData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const stmt = db.prepare(`
      INSERT INTO users (name, email, password, company, phone)
      VALUES (?, ?, ?, ?, ?)
    `);
    return stmt.run(name, email, hashedPassword, company || null, phone || null);
  },
  
  findByEmail: (email) => {
    const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
    return stmt.get(email);
  },
  
  findById: (id) => {
    const stmt = db.prepare('SELECT id, name, email, company, phone, status, created_at FROM users WHERE id = ?');
    return stmt.get(id);
  },
  
  findAll: () => {
    const stmt = db.prepare('SELECT id, name, email, company, phone, status, created_at FROM users');
    return stmt.all();
  },
  
  updateStatus: (id, status) => {
    const stmt = db.prepare('UPDATE users SET status = ? WHERE id = ?');
    return stmt.run(status, id);
  },
  
  delete: (id) => {
    const stmt = db.prepare('DELETE FROM users WHERE id = ?');
    return stmt.run(id);
  }
};

// 管线数据模型
const pipelineDataModel = {
  create: (data) => {
    const { name, type, points, user_id, status, file_path } = data;
    const stmt = db.prepare(`
      INSERT INTO pipeline_data (name, type, points, user_id, status, file_path)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    return stmt.run(name, type, points || 0, user_id, status || 'pending', file_path || null);
  },
  
  findAll: () => {
    const stmt = db.prepare('SELECT * FROM pipeline_data ORDER BY created_at DESC');
    return stmt.all();
  },
  
  findById: (id) => {
    const stmt = db.prepare('SELECT * FROM pipeline_data WHERE id = ?');
    return stmt.get(id);
  },
  
  updateStatus: (id, status) => {
    const stmt = db.prepare('UPDATE pipeline_data SET status = ? WHERE id = ?');
    return stmt.run(status, id);
  },
  
  delete: (id) => {
    const stmt = db.prepare('DELETE FROM pipeline_data WHERE id = ?');
    return stmt.run(id);
  }
};

// 文件模型
const fileModel = {
  create: (fileData) => {
    const { name, original_name, size, mime_type, file_path, user_id } = fileData;
    const stmt = db.prepare(`
      INSERT INTO files (name, original_name, size, mime_type, file_path, user_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    return stmt.run(name, original_name, size, mime_type, file_path, user_id);
  },
  
  findAll: () => {
    const stmt = db.prepare('SELECT * FROM files ORDER BY created_at DESC');
    return stmt.all();
  },
  
  findById: (id) => {
    const stmt = db.prepare('SELECT * FROM files WHERE id = ?');
    return stmt.get(id);
  },
  
  incrementDownloads: (id) => {
    const stmt = db.prepare('UPDATE files SET download_count = download_count + 1 WHERE id = ?');
    return stmt.run(id);
  },
  
  delete: (id) => {
    const stmt = db.prepare('DELETE FROM files WHERE id = ?');
    return stmt.run(id);
  }
};

module.exports = {
  db,
  userModel,
  pipelineDataModel,
  fileModel
};
