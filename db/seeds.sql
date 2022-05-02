
USE employee_db;

INSERT INTO department (department_name)
VALUES ("Human Resources"),
       ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 90000, 1),
       ("HR Associate", 60000, 1),
       ("Sales Manager", 120000, 2),
       ("Sales Associate", 45000, 2),
       ("Engineering Manager", 110000, 3),
       ("Senior Software Engineer", 85000, 3),
       ("Software Engineer", 65000, 3),
       ("Finance Manager", 85000, 4),
       ("Accountant", 60000, 4),
       ("Corporate Lawyer", 130000, 5),
       ("Paralegal", 50000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Steve", "Rogers", 1),
       ("Doreen", "Green", 2),
       ("Bucky", "Barnes", 2),
       ("Tony", "Stark", 3),
       ("James", "Rhodes", 4),
       ("Natasha", "Romanoff", 4),
       ("Reed", "Richards", 5),
       ("Bruce", "Banner", 6),
       ("Carol", "Danvers", 6),
       ("Scott", "Lang", 7),
       ("Miles", "Morales", 7),
       ("Raven", "Darkholme", 7),
       ("Rocket", "Raccoon", 7),
       ("Kamala", "Khan", 7),
       ("Clint", "Barton", 7),
       ("Ororo", "Monroe", 8),
       ("Peter", "Quill", 9),
       ("Sam", "Wilson", 9),
       ("Matt", "Murdoch", 10),
       ("Jennifer", "Walters", 10);
       ("Wade", "Wilson", 11),
       ("Luke", "Cage", 11),
       ("Thor", "Odinson", 11),
       
