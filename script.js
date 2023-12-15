
function addPlayer() { //We See the addPlayer like previously mentioned on the HTML file
   
   let firstName = document.getElementById('firstName').value;  // we are going to be selecting using the .getElementById method
   let lastName = document.getElementById('lastName').value;    // that we learned about in class this week
   let position = document.getElementById('position').value;

    

    
     tableBody = document.getElementsByTagName('tbody')[0];  // getting the table but using the .getElementsByTagName this time

   
    let newRow = tableBody.insertRow(tableBody.rows.length); // This will be how we will be inserting the new rows

    
    let cellNumber = newRow.insertCell(0);     // this will gives us the new rows with informnation inputted 
    let cellFirstName = newRow.insertCell(1);
    let cellLastName = newRow.insertCell(2);
    let cellPosition = newRow.insertCell(3);

    cellNumber.textContent = tableBody.rows.length;  // this is giving us the values of the information we inputted 
    cellFirstName.textContent = firstName;
    cellLastName.textContent = lastName;
    cellPosition.textContent = position;

    document.getElementById('firstName').value = ''; // and lastly we hav the clear form because we can see the empty strings at the end
    document.getElementById('lastName').value = '';
    document.getElementById('position').value = '';
}
