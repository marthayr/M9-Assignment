async function fetchEmployees() {
        //const response = await fetch('/data/employees.json');
        const response = await fetch('./data/empoyees.json');
        const employees = await response.json;
        return employees;
}
export {fetchEmployees};
