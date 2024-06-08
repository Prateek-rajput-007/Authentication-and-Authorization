// const User = require('../model/user');
// const bcrypt = require('bcrypt');

// async function createUser(userData) {
//     try {
//         const { name, email, password } = userData;

//         // Check if password is provided
//         // if (!password) {
//         //     throw new Error('Password is required');
//         // }

//         // // Hash the password
//         // const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user with the hashed password
//         const newUser = new User({
//             name,
//             email,
//             password, // Ensure the field name is 'password'
            
//         });

//         // Save the new user to the database
//         const savedUser = await newUser.save();

//         return savedUser;
//     } catch (error) {
//         // Handle errors properly
//         console.error('Error creating user:', error.message);
//         throw error;
//     }
// }

// module.exports = { createUser };
