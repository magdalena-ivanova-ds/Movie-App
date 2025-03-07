const userModel = require('../models/userModel');

async function getUsers(req, res) {
    try {
        const users = await userModel.getUsers();
        res.render('users', { users });
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
}

async function getUser(req, res) {
    try {
        const user = await userModel.getUser(req.params.id);
        if (user) {
            res.render('user', { user });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching user');
    }
}

async function createUser(req, res) {
    try {
        const newUser = await userModel.createUser(req.body);
        res.redirect('/users');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
}

async function updateUser(req, res) {
    try {
        const updatedUser = await userModel.updateUser(req.body);
        if (updatedUser) {
            res.redirect('/users/' + updatedUser.id);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Error updating user');
    }
}

async function deleteUser(req, res) {
    try {
        const success = await userModel.deleteUser(req.params.id);
        if (success) {
            res.redirect('/users');
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Error deleting user');
    }
}

async function editUser(req, res) {
    try {
        const user = await userModel.getUser(req.params.id);
        if (user) {
            res.render('editUser', { user });
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching user');
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    editUser,
};