// Render function that takes in: dataList (all data), 
const render = function (dataList) {

  // Empty the kudos div
  $('#kudos').empty();

  // Loop through the retrieved data and append each item to the kudos div
  for (let i = 0; i < dataList.length; i++) {
    console.log(dataList)
    $('#kudos')
      .append(
        `<div class='card'>
            <h5>${dataList[i].title}</h5>
            <h6>From: ${dataList[i].from}</h6> 
          <div class='card-body'>
            <h6>To: ${dataList[i].to}</h6>
            <p>${dataList[i].message}</p>
          </div>
        </div>`
      );
  }
}

// Function to retrieve all kudos, then render them to the page
const getKudos = function () {
  $.get(`/api/kudos/`)

    .then(function (data) {
      
      render(data)
    });
}

// Function to retrieve all users and add them to the To and From dropdowns
const getUsers = function () {
  $.get(`/api/users/`)
    .then(function (data) {

      // Loop through the data and add the name to both the sender and receiver dropdown
      // The database _id is used as the value for each option added
      for (let i = 0; i < data.length; i++) {
        console.log("user data", data)
        $('#kudo-from')
          .append(`<option>${data[i].name}</option>`)

        $('#kudo-to')
          .append(`<option>${data[i].name}</option>`)
      }
    });
}

// Function to POST a new kudo to the server      Messages Div sends alert if fields not filled in
const postKudo = function (event) {

  // Prevent default form action, and empty messages div
  event.preventDefault();
  $('#messages').empty();

  // If both a sender and receiver are selected, proceed
  if ($('#kudo-from').val() && $('#kudo-to').val()) {

    // Gather input data into an object to be POSTed to the server
    const kudo = {
      title: $('#kudo-title').val().trim(),
      message: $('#kudo-body').val().trim(),
      from: $('#kudo-from').val(),
      to: $('#kudo-to').val()
    }

    // Make the POST request
    $.post('/api/kudos', kudo)
      .then(function (data) {


        $('#kudo-title').val('');
        $('#kudo-body').val('');
        $('#kudo-from').val('');
        $('#kudo-to').val('');

        $('.modal').modal('hide');

        // Call the getKudos function to re-render page
        getKudos();
      }).fail(function (err) {


        $('#messages').append(`<div class='alert alert-danger'>There was an error with your submission. Please try again.</div>`)
      })
  } else {


    $('#messages').append(`<div class='alert alert-danger'>Please select both a sender and receiver</div>`)
  }
}

// Initial retrieval and rendering of Kudos and Users
getKudos();
getUsers();

$(document).on('click', '#send-kudo', postKudo);
