# Mess Bill Tracker

Mess Bill Tracker is a simple web application for tracking monthly mess bills. It uses Node.js, Express, EJS for the server-side, and PostgreSQL as the database.

## Installation

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running

### Clone the Repository

```bash
git clone https://github.com/your-username/mess-bill-tracker.git
cd mess-bill-tracker
```

### Install Dependencies

```bash
npm install
```

### Set Up PostgreSQL Database

1. Create a PostgreSQL database named `world`.
2. Import the data from `messdata.csv` into the `messdata` table.

### Configure Environment Variables

Create a `.env` file in the project root and add the following line:

```makefile
DATABASE_PASSWORD=your_postgresql_password
```

Replace `your_postgresql_password` with your actual PostgreSQL password.

### Run the Application

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to access the Mess Bill Tracker.

## Usage

- The application shows a dashboard with information about the current date, month, and pending amount.
- Use the "Filter by Month" input and "Show Unpaid Bills" checkbox to filter the displayed data.
- The data is fetched from the PostgreSQL database and displayed dynamically.

## Contributing

Feel free to contribute to the project by opening issues or creating pull requests.
