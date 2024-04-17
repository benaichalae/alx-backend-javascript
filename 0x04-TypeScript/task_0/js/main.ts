interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

function createTable(): HTMLTableElement {
  const table = document.createElement("table");
  table.border = "1";

  const headerRow = table.insertRow();
  const headerCell1 = headerRow.insertCell();
  headerCell1.innerHTML = "First Name";
  const headerCell2 = headerRow.insertCell();
  headerCell2.innerHTML = "Location";

  for (const student of studentsList) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.innerHTML = student.firstName;
    const cell2 = row.insertCell();
    cell2.innerHTML = student.location;
  }

  return table;
}

const body = document.body;
body.appendChild(createTable());
