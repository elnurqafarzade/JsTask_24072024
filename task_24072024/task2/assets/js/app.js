document.getElementById('addButton').addEventListener('click', function() {
    let no = document.getElementById('no').value;
    let fullname = document.getElementById('fullname').value;
    let position = document.getElementById('position').value;

    if (no || fullname || position) {
        let tableBody = document.getElementById('tableBody');
        let newRow = document.createElement('tr');

        let number = document.createElement('td');
        number.textContent = no;
        newRow.appendChild(number);

        let fullnameField = document.createElement('td');
        fullnameField.textContent = fullname;
        newRow.appendChild(fullnameField);

        let positionField = document.createElement('td');
        positionField.textContent = position;
        newRow.appendChild(positionField);

        tableBody.appendChild(newRow);

      
        document.getElementById('no').value = '';
        document.getElementById('fullname').value = '';
        document.getElementById('position').value = '';
    } else {
        alert('input boş qala bilməz.');
    }
});
