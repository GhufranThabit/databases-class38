const insertValues = [
  `INSERT INTO account (account_number,balance)
    VALUES
    (100,1000),
    (101,2000),
    (102,3000);`,

  `INSERT INTO account_changes ( change_number,account_number,amount,changed_date,remark)
    VALUES
    (1,100,100,"2020-01-01","remark1");`,
];
module.exports = insertValues;
