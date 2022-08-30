const query4 = [
  // prints names of all authors and their corresponding mentors
  `SELECT author_name, mentor_name
    FROM authors a
    INNER JOIN mentors m
    ON a.mentor_id = m.mentor_id;`,

  // prints all columns of authors and their published paper_title
  `SELECT a.author_name , p.paper_title
    FROM authors a
    LEFT JOIN author_papers ap on a.author_id = ap.author_id
    LEFT JOIN research_papers p on ap.paper_id = p.paper_id;`,
];

export default query4;
