# Employee-Tracker

## User Story
``
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business``

## Acceptance Criteria
``
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database ``

## Description
 
 I was tasked with creating an employee tracker using MySQL, Node.js, and Inquirer. When the user opens the CLI and types in "node index.js", they will be met with a text logo and a prompt with several options to choose. Users can view all employees, all roles, all departments, add employees, add roles, add departments, and update current employee roles. If the user chooses "View all employees" they will be met with a table containing all employee names, ids, role ids, and manager ids. If the user needs to add an employee, they will click "add employee" and in the questions following, they will need to provide first and last name, role id, and manager id (if applicable). The rest of the "add" choices will follow a similar structure with questions. After adding a new role, department, or employee, the user will be able to click "view" whichever category they've added to and they will see the updated view containing the added information.

## Usage
[Employee Tracker](https://drive.google.com/file/d/1_uyqusbewC4NcyM6lOCbVeA4yiYVwY93/view)
 
![Employee-Tracker-Img](https://i.gyazo.com/18718d6af7e58c6228bdcdb3f8ada86e.png)



## Credits

[Resource 1](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide)

[Resource 2](https://www.npmjs.com/package/asciiart-logo)

[Resource 3](https://www.npmjs.com/package/inquirer)

[Resource 4](https://dev.mysql.com/doc/)

My classmates, instructor, and TA's.

## License

MIT
