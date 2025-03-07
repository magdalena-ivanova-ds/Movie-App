# 🎬 Movie App

A simple and elegant Node.js web application for managing movies using MySQL. This app allows you to perform CRUD (Create, Read, Update, Delete) operations on a movie database.

---

## ✨ Features

- **View all movies**: See a list of all movies in the database.
- **Add a new movie**: Add a movie with details like title, year, main actors, genre, and description.
- **Edit movie details**: Update the details of an existing movie.
- **Delete a movie**: Remove a movie from the database.

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

---

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://dev.mysql.com/downloads/) (v8.0 or higher)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the MySQL database**:
   - Open MySQL and log in:
     ```bash
     mysql -u root -p
     ```
     - If that doen't work for you try this (Replace X.X with your MySQL version (e.g., 8.0)):
         ```bash
         "C:\Program Files\MySQL\MySQL Server X.X\bin\mysql" -u root -p
         ```
   - Run the SQL script to create the database and tables:
     ```bash
     source C:/Users/YourUsername/Projects/movie-app/database.sql;
     ```
   - Alternatively, you can copy and paste the SQL commands from `database.sql` into your MySQL client.

4. **Set up environment variables**:
   - Create a `.env` file in the project root:
     ```bash
     touch .env
     ```
   - Add your MySQL credentials to the `.env` file:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=movie_db
     ```
     Replace `yourpassword` with your MySQL password.

5. **Start the server**:
   ```bash
   node app.js
   ```

6. **Access the app**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🛠️ Project Structure

Here’s an overview of the project structure:

```
movie-app/
├── db.js                # MySQL connection setup
├── app.js               # Express app setup
├── database.sql         # SQL script to initialize the database
├── .env                 # Environment variables (not included in Git)
├── .env.example         # Example environment variables file (for reference)
├── .gitignore           # Files and folders to ignore in Git
├── README.md            # Project documentation (you're here!)
├── package.json         # Node.js dependencies and scripts
├── package-lock.json    # Auto-generated lock file for dependencies
├── controllers/         # Business logic for handling requests
│   └── userController.js
├── models/              # Database interaction logic
│   └── userModel.js
├── routes/              # Route definitions
│   ├── index.js
│   └── users.js
├── views/               # EJS templates
│   ├── createUser.ejs
│   ├── editUser.ejs
│   ├── index.ejs
│   ├── user.ejs
│   └── users.ejs
└── public/              # Static files (CSS)
    └── styles.css
```

---

## 📄 Database Schema

The `movies` table has the following structure:

| Column        | Type         | Description                     |
|---------------|--------------|---------------------------------|
| `id`          | INT          | Primary key, auto-incremented   |
| `title`       | VARCHAR(255) | Movie title                    |
| `year`        | INT          | Release year                   |
| `mainActors`  | TEXT         | Main actors                    |
| `genre`       | VARCHAR(255) | Movie genre                    |
| `description` | TEXT         | Movie description              |

---

## 🧑‍💻 Usage

### View All Movies
- Navigate to `http://localhost:3000/users` to see a list of all movies.

### Add a New Movie
- Click the **Add new movie** button on the movies page.
- Fill out the form and click **Create**.

### Edit a Movie
- Click the **Edit** button next to a movie on the movies page.
- Update the details and click **Save**.

### Delete a Movie
- Click the **Delete** button next to a movie on the movies page.

---

## 🛑 Troubleshooting

### Database Connection Issues
- Ensure MySQL is running and accessible.
- Verify your MySQL credentials in the `.env` file.
- Check if the `movie_db` database and `movies` table exist.

### Missing Dependencies
- Run `npm install` to install all required dependencies.

### Environment Variables
- Ensure the `.env` file is correctly formatted and located in the project root.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

