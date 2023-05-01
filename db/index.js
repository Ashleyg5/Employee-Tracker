const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.promise().query('SELECT * FROM employees');
    } 
    
    findAllDepartments() {
        return this.connection.promise().query('SELECT * FROM departments');
    }

    findAllRoles() {
        return this.connection.promise().query('SELECT * FROM roles');
    }

    addRole(title, salary, department_id) {
        return this.connection.promise().query('INSERT INTO roles (title, salary, department_id)values(?,?,?)', [title, salary, department_id]);
    }

    addDept(name) {
        return this.connection.promise().query('INSERT INTO departments (name)values(?)', [name]);
    }

    addEmployee(first_name, last_name, role_id, manager_id) {
        return this.connection.promise().query('INSERT INTO employees (first_name, last_name, role_id, manager_id)values(?,?,?,?)', [first_name, last_name, role_id, manager_id]);
    }

    updateRole(id, role_id) {
        return this.connection.promise().query('UPDATE TABLE employees SET role_id = ? WHERE id = ?', [id, role_id]);
    }


}

module.exports = new DB(connection);