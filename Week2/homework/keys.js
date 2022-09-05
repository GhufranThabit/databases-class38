// CREATE_AUTHORS_AND_MENTORS_TABLES
const query1 = [
  `CREATE TABLE IF NOT EXISTS authors (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(255),
    university VARCHAR(255),
    date_of_birth DATE,
    h_index INT, 
    gender ENUM('m', 'f')
);`,

  `ALTER TABLE authors
  ADD mentor_id INT,
  ADD CONSTRAINT FOREIGN KEY (mentor_id) REFERENCES authors(author_id);`,
];

export default query1;
