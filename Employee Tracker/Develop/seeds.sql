INSERT INTO department ( name)
VALUES ( 'Computer Science'),
       ( 'Math');
       
INSERT INTO role (title, salary, department_id)
VALUES ( 'software engineer', 95000.50, 001),
       ( 'Professor', 60500.5, 002);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ( 'Andy', 'Abebaw', 001, NULL),
       ( 'John', 'Deer', 002, 1);