INSERT INTO department(id, title)
VALUES 
(1, 'Manager'),
(2, 'HR'),
(3, 'Accounting'),
(4, 'Engineering'),
(5, 'Customer Service'),
(6, 'R&D'),
(7, 'Intern'),
(8, 'Maintenance'),
(9, 'Custodial');

INSERT INTO position(id, title, salary, department_id)
VALUES 
(1,'General Manager', 180.000, 1),
(2,'Engineering Manager', 160.000, 2),
(3,'Accounting Manager', 160.000, 3),
(4,'Customer Service Manager', 160.000, 4),
(5,'HR Rep', 65.000, 5),
(6,'Accountant', 75.000, 6),
(7,'Engineer', 140.000, 7),
(8,'Customer Rep', 45.000, 8),
(9,'Researcher', 115.000, 9),
(10,'Intern', 35.000, 10),
(11,'Service Tech', 100.000, 11),
(12,'Custodian', 50.000, 12);


INSERT INTO employee(id, first_name, last_name, position_id, manager_id)
VALUES 
(1,'Dave', 'Walker', 1, NULL),
(2, 'James', 'Fraser', 2, NULL),
(3, 'Jack', 'London', 3, NULL),
(4,'Robert', 'Bruce', 4, NULL),
(5,'Peter', 'Greenaway', 5, 1),
(6,'Derek', 'Jarman', 5, 1),
(7,'Paolo', 'Pasolini', 5, 1),
(8,'Heathcote', 'Williams', 6, 3),
(9,'Sandy', 'Powell', 6, 3),
(10,'Emil', 'Zola', 6, 3),
(11,'Sissy', 'Coalpits', 7, 2),
(12,'Antoinette', 'Capet', 7, 2),
(13,'Samuel', 'Delany', 7, 2),
(14,'Tony', 'Duvert', 7, 2),
(15,'Dennis', 'Cooper', 7, 2),
(16,'Monica', 'Bellucci', 8, 4),
(17,'Samuel', 'Johnson', 8, 4),
(18,'John', 'Dryden', 8, 4),
(19,'Alexander', 'Pope', 8, 4),
(20,'Lionel', 'Johnson', 8, 4),
(21,'Aubrey', 'Beardsley', 9, 2),
(22,'Tulse', 'Luper', 9, 2),
(23,'William', 'Morris', 9, 2),
(24,'George', 'Shaw', 9, 2),
(25,'Arnold', 'Bennett', 10, 1),
(26,'Algernon', 'Blackwood', 10, 2),
(27,'Rhoda', 'Broughton', 10, 3),
(28,'Hart', 'Crane', 10, 4),
(29,'Vitorio', 'DeSica', 11, 1),
(30,'Wilkie', 'Collins', 11, 1),
(31,'Elizabeth', 'Gaskell', 11, 1),
(32,'George', 'Sand', 12, 1),
(33,'Vernon', 'Lee', 12, 1),
(34,'Arthur', 'Machen', 12, 1);
