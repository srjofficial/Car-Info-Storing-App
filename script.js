// Function to store car details
function dataSto() {
    
    let data_A = document.getElementById('data_A').value;
    let data_B = document.getElementById('data_B').value;
    let data_C = document.getElementById('data_C').value;

    
    let datastorage = {
        carBrand: data_A,
        price: data_B,
        key: data_C
    };

    if (data_A === "" || data_B === "" || data_C === "") {
        alert("Please fill in all the fields");
    } else {

        if (localStorage.getItem(data_C)) {
            alert("Car is already registered");
        } else {

            localStorage.setItem(data_C, JSON.stringify(datastorage));
            alert("Car details stored successfully");
        }
    }
}


function dataRetri() {
    let retrieveKey = document.getElementById('keyRetrieve').value;
    let resultDiv = document.getElementById('Retrieve');

    let retrievedData = localStorage.getItem(retrieveKey);

    if (retrievedData) {
        let carDetails = JSON.parse(retrievedData);
        let htmlData = `<div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Car: ${carDetails.carBrand}</li>
              <li class="list-group-item">Price: ${carDetails.price}</li>
            </ul>
          </div>`;
        resultDiv.innerHTML = htmlData;
    } else {
        alert("invalid key")
    }
}


function deleteItem() {
    let deleteKey = document.getElementById('keyDelete').value;

    if (localStorage.getItem(deleteKey)) {
        localStorage.removeItem(deleteKey);
        alert("Car details deleted successfully");
    } else {
        alert("No car found with the entered key");
    }
}


function clearAll() {
    localStorage.clear();
    alert("All records cleared from storage");
}
