// employee management system

enum EmployeeStatus {
  ACTIVE = "ACTIVE",
  LEAVE = "ON_LEAVE",
  TERMINATE = "TERMINATED",
  SUSPEND = "SUSPENDED",
}

enum DepartmentType {
  ENGINEER = "ENGINEER",
  SALES = "SALES",
  HR = "HR",
}

interface contactInformation {
  email: string;
  phone: number;
  address: {
    location: string;
    street: string | number;
    zip_code: number;
  };
}

interface Employee extends contactInformation {
  id: number;
  firstName: string;
  lastName: string;
  status: EmployeeStatus;
  department: DepartmentType;
  salary: number;
  dateHired: Date;
  skills: String[];
}

interface Department {
  id: number;
  name: DepartmentType;
  budget: number;
  manager: string;
}

// project management 

enum  ProjectStatus {
    PLANNING = "planning",
    IN_PROGRESS = "in_progress",
    ON_HOLD = "on_hold",
    CANCEL = "cancel"
}

interface Project {
    id: number
    name: string
    status: ProjectStatus
    starDate: Date
    endDate: Date
    budget: number
    temMember: Employee[]
    milesStone: MilesStone[]
}

interface MilesStone {
    id: number
    number: string
    dueDate: Date
    completionStatus: number,
    assignTo: Employee[]
}

// implementation

