
const inquirer = require("inquirer");
var express = require('express');
var connection = require('./database')


// TODO: Create a function to initialize app
function init() {

    const askQuestion = () => {
        var prompts = []

        var initialPrompt = {
            name: "task",
            message: "Please select one of the options below.",
            type: "list",
            choices: ["View All Departments", "View all roles", "View all Employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit"]
        }
        prompts.push(initialPrompt);
        inquirer.prompt([
            ...prompts
        ]).then(function (data) {
            console.log(data);
            switch (data.task) {
                case "View All Departments":

                    connection.query('SELECT * FROM department', function (err, rows) {
                        if (err) {
                            req.flash('error', err)
                            res.render('profile', { data: '' })
                        } else {
                            console.table(rows)
                        }
                    })
                    askQuestion();
                    break;
                case "View all roles":
                    connection.query('SELECT * FROM role', function (err, rows) {
                        if (err) {
                            req.flash('error', err)
                            res.render('profile', { data: '' })
                        } else {
                            console.table(rows)
                        }
                    })
                    askQuestion();
                    break;
                case "View all Employees":
                    connection.query('SELECT * FROM employee ', function (err, rows) {
                        if (err) {
                            req.flash('error', err)
                            res.render('profile', { data: '' })
                        } else {
                            console.table(rows)
                        }
                    })
                    askQuestion();
                    break;
                case "Add a department":
                    inquirer
                        .prompt([
                            {
                                name: 'name',
                                message: 'What is the name of the department?'
                            },
                        ])
                        .then((answers => {
                            console.info('Answer:', answers.id);
                            let stmt = `INSERT INTO department(name)VALUES(?)`;
                            let todo = [answers.name];
                            connection.query(stmt, todo, (err, results, fields) => {
                                if (err) {
                                    return console.error(err.message);
                                }
                                connection.query('SELECT id,name FROM department', function (err, rows) {
                                    if (err) {
                                        req.flash('error', err)
                                        res.render('profile', { data: '' })
                                    } else {
                                        console.table(rows)
                                    }
                                })
                            });
                            askQuestion();
                        }));

                    break;
                case "Add a role":
                    console.log("Add a Role:");
                    connection.query('SELECT id,name FROM department', function (err, rows) {

                        //console.table(rows)
                        let departments = rows;
                        const departmentChoices = departments.map(({ id, name }) => ({
                            name: name,
                            value: id
                        }))


                        inquirer
                            .prompt([
                                {
                                    name: 'title',
                                    message: 'What is the title of the role?'
                                },
                                {
                                    name: 'salary',
                                    message: 'What is salary of the role?'
                                },
                                {
                                    type: "list",
                                    name: 'departmentID',
                                    message: 'What is the department?',
                                    choices: departmentChoices
                                },
                            ])
                            .then((answers => {
                                let sql = 'INSERT INTO role SET ?'
                                let role = { title: answers.title, salary: answers.salary, department_id: answers.departmentID }
                                connection.query(sql, role, (err, result) => {
                                    if (err) throw err;
                                    console.log(result);
                                });
                                askQuestion();
                            }));

                    })

                    break;
                case "Add an employee":
                    console.log("Add an Employee:");
                    connection.query('SELECT id,title FROM role', function (err, rows) {
                        let role = rows;
                        const roleChoices = role.map(({ id, title }) => ({
                            name: title,
                            value: id
                        }))
                        connection.query('SELECT id,first_name FROM employee', function (err, rows2) {
                        //console.table(rows)
                        

                            //console.table(rows)
                            let manager = rows2;
                            const managerChoices = manager.map(({ id, first_name }) => ({
                                name: first_name,
                                value: id
                            }))

                        inquirer
                            .prompt([
                                {
                                    name: 'firstName',
                                    message: 'What is the first name of the employee?'
                                },
                                {
                                    name: 'lastName',
                                    message: 'What is the last name of the employee?'
                                },
                                {
                                    type: "list",
                                    name: 'roleID',
                                    message: 'What is the role?',
                                    choices: roleChoices
                                },
                                {
                                    type: "list",
                                    name: 'managerID',
                                    message: 'What is the manager name',
                                    choices: managerChoices
                                },
                            ])
                            .then((answers => {
                                let sql = 'INSERT INTO employee SET ?'
                                let role = { first_name: answers.firstName, last_name: answers.lastName, role_id: answers.roleID, manager_id: answers.managerID }
                                connection.query(sql, role, (err, result) => {
                                    if (err) throw err;
                                    console.log(result);
                                });
                                askQuestion();
                            }));
                    });
                });

                    break;
                case "Update an employee role":
                    connection.query('SELECT id,first_name FROM employee', function (err, rows) {

                        //console.table(rows)
                        let employee = rows;
                        const employeeChoices = employee.map(({ id, first_name }) => ({
                            name: first_name,
                            value: id
                        }))
                        inquirer
                            .prompt([
                                {
                                    type: "list",
                                    name: 'employeeID',
                                    message: 'Select the Employee to Update',
                                    choices: employeeChoices
                                },
                            ])
                            .then((employee => {
                                connection.query('SELECT id,title FROM role', function (err, rows) {

                                    //console.table(rows)
                                    let roles = rows;
                                    const roleChoices = roles.map(({ id, title }) => ({
                                        name: title,
                                        value: id
                                    }))

                                    inquirer
                                        .prompt([
                                            {
                                                type: "list",
                                                name: 'roleID',
                                                message: 'Select the Role to Update',
                                                choices: roleChoices
                                            },
                                        ])
                                        .then((role => {
                                            connection.query('SELECT id,title FROM employee', function (err, rows) {
                                                console.log("_____________")
                                                console.log(role.roleID)
                                                console.log(employee.employeeID)
                                                console.log("_____________")
                                                let sql = 'UPDATE employee SET role_id = ? WHERE ID = ?;'
                                                connection.query(sql, [role.roleID, employee.employeeID], (err, result) => {
                                                    if (err) throw err;
                                                    console.log(result);
                                                });
                                                askQuestion();

                                            });
                                        }));
                                });
                                
                            }));
                    });
                    break;
                case "Exit":
                    break;
            }

        });
    }
    askQuestion();
}

// Function call to initialize app

init();


