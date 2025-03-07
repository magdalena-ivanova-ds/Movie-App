const promisePool = require('../db'); // Import the promise-based pool

// Get all movies
async function getUsers() {
    const [rows] = await promisePool.query('SELECT * FROM movies');
    return rows;
}

// Get a single movie by ID
async function getUser(id) {
    const [rows] = await promisePool.query('SELECT * FROM movies WHERE id = ?', [id]);
    return rows[0] || null;
}

// Create a new movie
async function createUser(data) {
    const { title, year, mainActors, genre, description } = data;
    const [result] = await promisePool.query(
        'INSERT INTO movies (title, year, mainActors, genre, description) VALUES (?, ?, ?, ?, ?)',
        [title, year, mainActors, genre, description]
    );
    return { id: result.insertId, ...data };
}

// Update a movie
async function updateUser(data) {
    const { id, title, year, mainActors, genre, description } = data;
    const [result] = await promisePool.query(
        'UPDATE movies SET title = ?, year = ?, mainActors = ?, genre = ?, description = ? WHERE id = ?',
        [title, year, mainActors, genre, description, id]
    );
    if (result.affectedRows > 0) {
        return data;
    }
    return null;
}

// Delete a movie
async function deleteUser(id) {
    const [result] = await promisePool.query('DELETE FROM movies WHERE id = ?', [id]);
    return result.affectedRows > 0;
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};