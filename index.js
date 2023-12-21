function retrieveAndDisplay() {
  var Name = localStorage.getItem("name");
  var age = localStorage.getItem("age");

  if (Name && age) {
    const displayArea = document.getElementById('displayArea');
    displayArea.innerHTML = '';

    const table = document.createElement('table');
    const headerRow = table.insertRow(0);
    const nameHeader = headerRow.insertCell(0);
    const ageHeader = headerRow.insertCell(1);

    nameHeader.innerHTML = '<b>Name</b>';
    ageHeader.innerHTML = '<b>Age</b>';

    const dataRow = table.insertRow(1);
    const nameCell = dataRow.insertCell(0);
    const ageCell = dataRow.insertCell(1);

    nameCell.textContent = Name;
    ageCell.textContent = age;

    displayArea.appendChild(table);
  } else {
    alert('Please fill in the information!');
  }
}
  
  
  document.getElementById("form").addEventListener("submit", function (event) {
   event.preventDefault();

  var Name = document.getElementById("Name").value;
  var age = document.getElementById("age").value;

  localStorage.setItem("name", Name);
  localStorage.setItem("age", age);

  document.getElementById('Name').value = '';
  document.getElementById('age').value = '';
});

