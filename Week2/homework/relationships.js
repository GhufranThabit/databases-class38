const query2 = [
  //  CREATE_RESEARCH_PAPERS_TABLE
  `CREATE TABLE IF NOT EXISTS research_Papers (
    paper_id INT AUTO_INCREMENT PRIMARY KEY,
    paper_title VARCHAR(255), 
    conference VARCHAR(255),
    publish_date DATE);`,
  //  CREATE_AUTHOR_PAPERS_TABLE
  `CREATE TABLE IF NOT EXISTS author_Papers (
    id INT PRIMARY KEY,
    author_id INT,
    paper_id INT,
    FOREIGN KEY (author_id) REFERENCES authors (author_id),
    FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id));`,
];

const query3 = [
  //  INSERT_INTO_MENTORS_TABLE
  `INSERT INTO mentors(mentor_id,mentor_name)
    VALUES
    (1,"Ali"),
    (2,"Rob"),
    (3,"Harvey"),
    (4,"Kelly"),
    (5,"Nancy"),
    (6,"Jo"),
    (7,"Robert"),
    (8,"Maria"),
    (9,"Sally");`,

  // INSERT_INTO_AUTHORS_TABLE (15)
  `INSERT INTO authors(author_id,author_name,university,date_of_birth,h_index, gender,mentor_id)
    VALUES
    (1, "Ghufran Tawfik", "Erasmus","1991-01-01",100,"f",9),
    (2, "Ahmed Abdo", "Erasmus","1984-02-01",200,"m",6),
    (3, "Jo Daneil", "Ayden","1990-01-01",150,"m",1),
    (4, "Emad saeed", "Delft","1990-08-01",400,"m",9),
    (5, "Hadeel Ali", "Erasmus","1988-01-01",500,"f",2),
    (6, "Mohammed hammad", "Rotterdam","1985-03-03",900,"m",2),
    (7, "sara saleh", "Erasmus","1991-02-02",170,"f",6),
    (8, "layla Jamel", "Ayden","1980-01-01",900,"f",1),
    (9, "John Harvey", "Delft","1984-06-12",300,"m",4),
    (10, "Fadi salem","Erasmus","1980-06-01",600,"m",5),
    (11, "Kelly Jim", "Delft","1970-01-01",800,"f",3),
    (12,"sally safwan", "Erasmus","1981-09-01",101,"f",7),
    (13, "Ali Rami", "Erasmus","1987-07-01",550,"m",8),
    (14, "John Doe", "Erasmus","1980-12-01",760,"m",3),
    (15, "Anne Mark", "Delft","1992-08-01",100,"f",2);`,

  // INSERT_INTO_RESEARCH_PAPERS_TABLE (30 papers)
  `INSERT INTO research_Papers(paper_id,paper_title,conference,publish_date)
    VALUES
    (1,"How does social media influence interpersonal communication?","Social Issues","2020-01-01"),
    (2,"Dairy products and how they should be used in a balance","Health","2020-01-01"),
    (3,"Is multitasking a productive method of work?","Business","2020-01-01"),
    (4,"How can creative marketing increase your sales?","Business","2020-01-01"),
    (5,"How does global warming alter wildlife?","Environment","2020-01-01"),
    (6,"How did climate change in the last 30 years?","Environment","2020-01-01"),
    (7,"How did Bill Gates and Steve Jobs change the world","Technology","2020-01-01"),
    (8,"How close did we get to Artificial Intelligence?","Technology","2020-01-01"),
    (9,"Should colleges pay student-athletes and how should they do it?","Health","2020-01-01"),
    (10,"Is there a difference between a man and a womans heart?","Health","2020-01-01"),
    (11,"What are the possible health benefits of childbearing and parenting?","Health","2020-01-01"),
    (12,"The significance of ethics to business and how to control bad behavior.","Health","2020-01-01"),
    (13,"Which companies will make it to the top 5 best in the next decade?","Health","2020-01-01"),
    (14,"Is feminism changing American society?","Health","2020-01-01"),
    (15,"Are universities becoming business-driven?","Health","2020-01-01"),
    (16,"Should universities have special accommodation facilities for the disabled?","Health","2020-01-01"),
    (17,"Is college education in line with the job market?","Health","2020-01-01"),
    (18,"Basic of Artificial Neural Network","Computer Science and Engineering","2020-01-01"),
    (19,"Methods for Determining the Energy Release in Hypothetical Reactor Meltdown Accidents","Atomic Power","2020-01-01"),
    (20,"Boiling Density in Vertical Rectangular Multichannel Sections With Natural Circulation","Mechanical Engineering","2020-01-01"),
    (21,"Neutron Flux Distributions in Natural Uranium Tubes","Physics and Mathematics","2020-01-01"),
    (22,"The effects of outdoor learning environments on engagement levels of primary school","Health","2020-01-01"),
    (23,"Assessment of microorganisms found in coal seam water holding ponds and in brine","Health","2020-01-01"),
    (24,"The top 20 fails of science fiction movies in 2010","Health","2020-01-01"),
    (25,"How to eradicate poverty from our community","Health","2020-01-01"),
    (26,"The impact of technology in genetic engineering","Health","2020-01-01"),
    (27,"Social media addiction","Health","2020-01-01"),
    (28,"Obesity in kids of the developed economies","Health","2020-01-01"),
    (29,"Intelligence- inherited or developed","Health","2020-01-01"),
    (30,"The human evolution","Health","2020-01-01");`,

  // INSERT_INTO_AUTHOR_PAPERS_TABLE(15)
  `INSERT INTO author_Papers (id,author_id,paper_id )
    VALUES
    (1,2,3),
    (2,8,1),
    (3,5,2),
    (4,7,14),
    (5,9,10),
    (6,15,11),
    (7,1,30),
    (8,6,4),
    (9,8,5),
    (10,10,6),
    (11,3,7),
    (12,4,12),
    (13,11,8),
    (14,12,9),
    (15,13,22);`,
];
export { query2, query3 };
