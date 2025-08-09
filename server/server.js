const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hendekanC11H24',
  database: 'ilp'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
  res.json({ message: "Backend is running! Welcome to ILP!" });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      bcrypt.compare(password, results[0].password, (err, match) => {
        if (err) return res.status(500).json({ error: err.message });
        if (match) {
          res.json({ success: true, message: 'Login successful!' });
        } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: err.message });
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ success: false, message: 'Username already exists' });
        }
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true, message: 'User registered!' });
    });
  });
});

app.post('/execute', async (req, res) => {
  const { language, code, input } = req.body;
  const dir = path.join(__dirname, 'temp');
  if (!fs.existsSync(dir)) {
    console.log(`Creating temp directory: ${dir}`);
    fs.mkdirSync(dir);
  }

  const fileName = `code-${Date.now()}`;
  let filePath;

  try {
    switch (language) {
      case 'cpp':
        filePath = path.join(dir, `${fileName}.cpp`);
        break;
      case 'java':
        filePath = path.join(dir, `Main.java`);
        break;
      case 'python':
        filePath = path.join(dir, `${fileName}.py`);
        break;
      case 'javascript':
        filePath = path.join(dir, `${fileName}.js`);
        break;
      default:
        return res.status(400).json({ error: 'Unsupported language' });
    }

    fs.writeFileSync(filePath, code);
    fs.chmodSync(filePath, '644');
    console.log(`Code file written: ${filePath}`);
    console.log(`Code file exists after write: ${fs.existsSync(filePath)}`);
    console.log(`Code file contents:\n${fs.readFileSync(filePath, 'utf8')}`);

    const inputPath = path.join(dir, `${fileName}-input.txt`);
    fs.writeFileSync(inputPath, input.trim());
    fs.chmodSync(inputPath, '644');
    console.log(`Input file written: ${inputPath}`);
    console.log(`Input file exists after write: ${fs.existsSync(inputPath)}`);
    console.log(`Input file contents:\n${fs.readFileSync(inputPath, 'utf8')}`);

    const dockerDir = dir.replace(/\\/g, '/').replace(/^([a-zA-Z]):/, (_, drive) => `/${drive.toLowerCase()}`);
    const containerName = `code-exec-${Date.now()}`;
    const execCommand = `docker run --rm --name ${containerName} -v "${dockerDir}:/app" code-executor /app/run.sh ${language} "/app/${path.basename(filePath)}" "/app/${path.basename(inputPath)}"`;

    console.log(`Executing command: ${execCommand}`);

    exec(execCommand, { timeout: 5000 }, (error, stdout, stderr) => {
      // Temporarily comment out file deletion for debugging
      // if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      // if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);

      if (error) {
        console.error(`Execution error: ${error.message}`);
        console.error(`STDERR: ${stderr}`);
        return res.status(400).json({ error: stderr || error.message });
      }

      console.log(`Output: ${stdout}`);
      res.json({ output: stdout });
    });
  } catch (error) {
    console.error(`Server error: ${error.message}`);
    // Comment out file deletion here too
    // if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    // if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});