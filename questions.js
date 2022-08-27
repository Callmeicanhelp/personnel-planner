const mainMenu = [
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments','View all positions','View all employees','Add a department','Add a position','Add an employee','Update an employee position'],
        name:'mainMenu'
    },
]

const departmentQuestions = [
    {
        type:'input',
        message:'New department name?',
        name:'newDept'
    }
]

const positionQuestions = [
    {
        type:'input',
        message:'New position name?',
        name:'newPositionName'
    },
    {
        type:'input',
        message:'Salary for new position?',
        name:'newPositionSalary'
    },
    {
        type:'input',
        message:'Which department and id does this position belong to?',
        name:'newPositionDept'
    }
]

const employeeQuestions = [
    {
        type:'input',
        message:'What is the new employees FIRST name?',
        name:'firstName'
    },
    {
        type:'input',
        message:'What is the new employees LAST name?',
        name:'lastName'
    },
    {
        type:'input',
        message:'What position will this employee have?',
        name:'newEmployeePosition'
    },
    {
        type:'input',
        message:'Who is the new employees manager?',
        name:'newEmployeeManager'
    }
]

const updateEmployee = [
    {
        type:'input',
        message:'Which employee would you like to update?',
        name:'updateEmployee'
    },
    {
        type:'input',
        message:'What is the employees new position?',
        name:'updateEmployeePosition'
    },
    {
        type:'input',
        message:'What is the employees new salary?',
        name:'updateEmployeeSalary'
    }
]

module.exports = {mainMenu, departmentQuestions, positionQuestions, employeeQuestions, updateEmployee}