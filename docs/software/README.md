# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
  CREATE DATABASE lab5;
USE lab5;

-- Таблица User
CREATE TABLE User (
    id CHAR(36) PRIMARY KEY, -- Хранение UUID
    password TEXT NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL, -- Указана длина для UNIQUE
    email VARCHAR(100) UNIQUE NOT NULL,   -- Указана длина для UNIQUE
    role VARCHAR(50) NOT NULL
);

-- Таблица Attributes
CREATE TABLE Attributes (
    id CHAR(36) PRIMARY KEY,
    description TEXT,
    value TEXT,
    attributeType VARCHAR(50),
    name VARCHAR(100)
);

-- Таблица Permissions
CREATE TABLE Permissions (
    id CHAR(36) PRIMARY KEY,
    description TEXT,
    level INT,
    name VARCHAR(100)
);

-- Таблица UserAttributes
CREATE TABLE UserAttributes (
    UserID CHAR(36),
    AttributeID CHAR(36),
    PRIMARY KEY (UserID, AttributeID),
    FOREIGN KEY (UserID) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (AttributeID) REFERENCES Attributes(id) ON DELETE CASCADE
);

-- Таблица Search
CREATE TABLE Search (
    id CHAR(36) PRIMARY KEY,
    status VARCHAR(50),
    searchType VARCHAR(50),
    target TEXT,
    parameters TEXT
);

-- Таблица User_has_Search
CREATE TABLE User_has_Search (
    User_id CHAR(36),
    Search_id CHAR(36),
    PRIMARY KEY (User_id, Search_id),
    FOREIGN KEY (User_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (Search_id) REFERENCES Search(id) ON DELETE CASCADE
);

-- Таблица DataLink
CREATE TABLE DataLink (
    link VARCHAR(255) PRIMARY KEY
);

-- Таблица Search_has_DataLink
CREATE TABLE Search_has_DataLink (
    Search_id CHAR(36),
    DataLink_link VARCHAR(255),
    PRIMARY KEY (Search_id, DataLink_link),
    FOREIGN KEY (Search_id) REFERENCES Search(id) ON DELETE CASCADE,
    FOREIGN KEY (DataLink_link) REFERENCES DataLink(link) ON DELETE CASCADE
);

-- Таблица DataFolder
CREATE TABLE DataFolder (
    id CHAR(36) PRIMARY KEY,
    description TEXT,
    date DATETIME,
    owner VARCHAR(100),
    name VARCHAR(100)
);

-- Таблица DataFolder_has_DataLink
CREATE TABLE DataFolder_has_DataLink (
    DataFolder_id CHAR(36),
    DataLink_link VARCHAR(255),
    PRIMARY KEY (DataFolder_id, DataLink_link),
    FOREIGN KEY (DataFolder_id) REFERENCES DataFolder(id) ON DELETE CASCADE,
    FOREIGN KEY (DataLink_link) REFERENCES DataLink(link) ON DELETE CASCADE
);

-- Таблица Data
CREATE TABLE Data (
    id CHAR(36) PRIMARY KEY,
    size DOUBLE,
    date DATETIME,
    dataType VARCHAR(50),
    name VARCHAR(100),
    description TEXT,
    tags TEXT,
    createdBy CHAR(36),
    FOREIGN KEY (createdBy) REFERENCES User(id) ON DELETE SET NULL
);

-- Таблица DataLink_has_Data
CREATE TABLE DataLink_has_Data (
    Data_id CHAR(36),
    DataLink_link VARCHAR(255),
    PRIMARY KEY (Data_id, DataLink_link),
    FOREIGN KEY (Data_id) REFERENCES Data(id) ON DELETE CASCADE,
    FOREIGN KEY (DataLink_link) REFERENCES DataLink(link) ON DELETE CASCADE
);

-- Таблица AdminActivityReports
CREATE TABLE AdminActivityReports (
    id CHAR(36) PRIMARY KEY,
    adminID CHAR(36),
    activity TEXT,
    date DATETIME,
    FOREIGN KEY (adminID) REFERENCES User(id) ON DELETE CASCADE
);

-- Таблица AdminRegistration
CREATE TABLE AdminRegistration (
    id CHAR(36) PRIMARY KEY,
    adminID CHAR(36),
    registeredBy CHAR(36),
    date DATETIME,
    FOREIGN KEY (adminID) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (registeredBy) REFERENCES User(id) ON DELETE SET NULL
);

-- Таблица GuestAccess
CREATE TABLE GuestAccess (
    id CHAR(36) PRIMARY KEY,
    dataID CHAR(36),
    accessDate DATETIME,
    guestID CHAR(36),
    FOREIGN KEY (dataID) REFERENCES Data(id) ON DELETE CASCADE
);

-- Таблица RemovedAdminData
CREATE TABLE RemovedAdminData (
    id CHAR(36) PRIMARY KEY,
    adminID CHAR(36),
    removedBy CHAR(36),
    dataID CHAR(36),
    date DATETIME,
    FOREIGN KEY (adminID) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (removedBy) REFERENCES User(id) ON DELETE SET NULL,
    FOREIGN KEY (dataID) REFERENCES Data(id) ON DELETE CASCADE
);

```

## RESTfull сервіс для управління даними

###Config
```
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'lab5',
    port: 3309,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
```
###Server setup
```
const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const attributesRoutes = require('./routes/attributes');
const permissionsRoutes = require('./routes/permissions');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/attributes', attributesRoutes);
app.use('/permissions', permissionsRoutes);

app.get('/', (req, res) => {
    res.send('RESTfull service');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

```
###Users routes
```
const express = require('express');
const UsersController = require('../controllers/UsersController');
const validateUser = require('../validation/userValidation');

const router = express.Router();

router.get('/', UsersController.getAll);

router.post('/', async (req, res) => {
    try {
        validateUser(req.body);
        await UsersController.create(req, res);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/:id', async (req, res) => {
    const { password, username, email, role } = req.body;
    if (!password || !username || !email || !role) {
        return res.status(400).send('All fields (password, username, email, role) are required for update');
    }
    await UsersController.update(req, res);
});

router.delete('/:id', UsersController.delete);

module.exports = router;

```
###Users controller
```
const pool = require('../db');

module.exports = {
    getAll: async (req, res) => {
        try {
            const [rows] = await pool.query('SELECT * FROM User');
            res.json(rows);
        } catch (err) {
            res.status(500).send('Database error: ' + err.message);
        }
    },
    create: async (req, res) => {
        const { id, password, username, email, role } = req.body;
        try {
            const query = 'INSERT INTO User (id, password, username, email, role) VALUES (?, ?, ?, ?, ?)';
            const [result] = await pool.query(query, [id, password, username, email, role]);
            res.status(201).send({ id, username });
        } catch (err) {
            res.status(500).send('Error creating user: ' + err.message);
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { password, username, email, role } = req.body;
        try {
            const query = 'UPDATE User SET password = ?, username = ?, email = ?, role = ? WHERE id = ?';
            await pool.query(query, [password, username, email, role, id]);
            res.send(`User with ID ${id} updated`);
        } catch (err) {
            res.status(500).send('Error updating user: ' + err.message);
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const query = 'DELETE FROM User WHERE id = ?';
            await pool.query(query, [id]);
            res.send(`User with ID ${id} deleted`);
        } catch (err) {
            res.status(500).send('Error deleting user: ' + err.message);
        }
    },
};

```
###Attributes routes
```
const express = require('express');
const AttributesController = require('../controllers/AttributesController');

const router = express.Router();

router.get('/', AttributesController.getAll);
router.post('/', AttributesController.create);
router.put('/:id', AttributesController.update);
router.delete('/:id', AttributesController.delete);

module.exports = router;

```
###Attribute controller
```
const pool = require('../db');

const AttributesController = {
    async getAll(req, res) {
        try {
            const [rows] = await pool.query('SELECT * FROM Attributes');
            res.json(rows);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async create(req, res) {
        const { description, value, attributeType, name } = req.body;
        if (!description || !value || !attributeType || !name) {
            return res.status(400).send('All fields are required');
        }
        try {
            const [result] = await pool.query(
                'INSERT INTO Attributes (id, description, value, attributeType, name) VALUES (UUID(), ?, ?, ?, ?)',
                [description, value, attributeType, name]
            );
            res.status(201).send(`Attribute created with ID: ${result.insertId}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { description, value, attributeType, name } = req.body;
        if (!description || !value || !attributeType || !name) {
            return res.status(400).send('All fields are required for update');
        }
        try {
            const [result] = await pool.query(
                'UPDATE Attributes SET description = ?, value = ?, attributeType = ?, name = ? WHERE id = ?',
                [description, value, attributeType, name, id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).send('Attribute not found');
            }
            res.send('Attribute updated successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            const [result] = await pool.query('DELETE FROM Attributes WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                return res.status(404).send('Attribute not found');
            }
            res.send('Attribute deleted successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

module.exports = AttributesController;

```
###Permissions routes
```
const express = require('express');
const PermissionsController = require('../controllers/PermissionsController');

const router = express.Router();

router.get('/', PermissionsController.getAll);
router.post('/', PermissionsController.create);
router.put('/:id', PermissionsController.update);
router.delete('/:id', PermissionsController.delete);

module.exports = router;

```
###Permissions controller
```
const pool = require('../db');

const PermissionsController = {
    async getAll(req, res) {
        try {
            const [rows] = await pool.query('SELECT * FROM Permissions');
            res.json(rows);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async create(req, res) {
        const { description, level, name } = req.body;
        if (!description || !level || !name) {
            return res.status(400).send('All fields are required');
        }
        try {
            const [result] = await pool.query(
                'INSERT INTO Permissions (id, description, level, name) VALUES (UUID(), ?, ?, ?)',
                [description, level, name]
            );
            res.status(201).send(`Permission created with ID: ${result.insertId}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { description, level, name } = req.body;
        if (!description || !level || !name) {
            return res.status(400).send('All fields are required for update');
        }
        try {
            const [result] = await pool.query(
                'UPDATE Permissions SET description = ?, level = ?, name = ? WHERE id = ?',
                [description, level, name, id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).send('Permission not found');
            }
            res.send('Permission updated successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async delete(req, res) {
        const { id } = req.params;
        try {
            const [result] = await pool.query('DELETE FROM Permissions WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                return res.status(404).send('Permission not found');
            }
            res.send('Permission deleted successfully');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

module.exports = PermissionsController;

```
###User validation
```
module.exports = (user) => {
    const { password, username, email, role } = user;
    if (!password || !username || !email || !role) {
        throw new Error('All fields (password, username, email, role) are required');
    }
    if (username.length > 100 || email.length > 100) {
        throw new Error('Username and email must be less than 100 characters');
    }
};

```
