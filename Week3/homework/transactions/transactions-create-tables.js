const createTables = [
  `CREATE TABLE IF NOT EXISTS account (
        account_number INT AUTO_INCREMENT PRIMARY KEY,
        balance FLOAT);`,

  `CREATE TABLE IF NOT EXISTS account_changes (
        change_number INT AUTO_INCREMENT PRIMARY KEY,
        account_number INT,
        amount FLOAT,
        changed_date DATE,
        remark VARCHAR(50),
        FOREIGN KEY(account_number) REFERENCES account(account_number)
        );`,
];

module.exports = createTables;
