const query5 = [
  //1-All research papers and the number of authors that wrote that paper.
  `SELECT p.paper_id,p.paper_title, COUNT(ap.author_id)
    FROM research_papers p
    LEFT JOIN author_papers ap ON ap.paper_id = p.paper_id
    GROUP BY ap.paper_id;`,

  //2-Sum of the research papers published by all female authors.
  ` SELECT COUNT(*) AS research_paper_by_female
    FROM author_papers ap 
    JOIN authors a ON a.author_id = ap.author_id
    WHERE a.gender = "f";`,

  //3-Average of the h-index of all authors per university.
  `SELECT university, AVG(h_index) AS average_index 
    FROM authors
    GROUP BY university;`,

  //4-Sum of the research papers of the authors per university.
  `SELECT university, COUNT(paper_id) AS Total_oF_research_papers
    FROM authors a
    JOIN author_papers ap ON a.author_id = ap.author_id
    GROUP BY university; `,

  //5-Minimum and maximum of the h-index of all authors per university.
  `SELECT university, MIN(h_index),MAX(h_index)
    FROM authors
    GROUP BY university;`,
];
export default query5;
