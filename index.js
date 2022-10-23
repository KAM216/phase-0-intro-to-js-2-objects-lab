const employee = {
        name: "Bob",
        streetAddress: "Jupiter",
    };
    function updateEmployeeWithKeyAndValue(obj, key, value ) {
        const newObj = { ...obj };
        newObj[key] = value;
        return newObj;
    }

    const newObj = updateEmployeeWithKeyAndValue(
        employee,
        "John",
        "Mars"
    );
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value ) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return obj
}
function deleteFromEmployeeByKey(obj, key ) {
    const newObj = {...obj };
   delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key ){
    delete obj[key];
    return obj;
}
