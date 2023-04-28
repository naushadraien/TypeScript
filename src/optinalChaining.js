function getEmployee(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
var employee = getEmployee(0);
