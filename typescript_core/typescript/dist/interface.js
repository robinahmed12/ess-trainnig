"use strict";
// employee management system
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeStatus;
(function (EmployeeStatus) {
    EmployeeStatus["ACTIVE"] = "ACTIVE";
    EmployeeStatus["LEAVE"] = "ON_LEAVE";
    EmployeeStatus["TERMINATE"] = "TERMINATED";
    EmployeeStatus["SUSPEND"] = "SUSPENDED";
})(EmployeeStatus || (EmployeeStatus = {}));
var DepartmentType;
(function (DepartmentType) {
    DepartmentType["ENGINEER"] = "ENGINEER";
    DepartmentType["SALES"] = "SALES";
    DepartmentType["HR"] = "HR";
})(DepartmentType || (DepartmentType = {}));
// project management 
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["PLANNING"] = "planning";
    ProjectStatus["IN_PROGRESS"] = "in_progress";
    ProjectStatus["ON_HOLD"] = "on_hold";
    ProjectStatus["CANCEL"] = "cancel";
})(ProjectStatus || (ProjectStatus = {}));
// implementation
//# sourceMappingURL=interface.js.map