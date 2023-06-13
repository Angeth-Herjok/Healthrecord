function validateAppointmentForm() {
    // Check if all required fields are filled in
    var patientId = document.getElementById("patient-id").value;
    var doctorId = document.getElementById("doctor-id").value;
    var appointmentDate = document.getElementById("appointment-date").value;
    var appointmentTime = document.getElementById("appointment-time").value;
  
    if (patientId === "" || doctorId === "" || appointmentDate === "" || appointmentTime === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // Return true if all required fields are filled in
    return true;
  }

  function notifyAppointmentScheduled() {
    // Notify the user that their appointment has been scheduled
    var notification = document.getElementById("notification");
    notification.innerHTML = "Your appointment has been scheduled.";
  }

  function remindAppointment() {
    // Remind the user of their appointment in advance
    var reminder = document.getElementById("reminder");
    reminder.innerHTML = "Your appointment is in 15 minutes.";
  }

  // Notification system
function notifyNewMessage() {
    // Notify the user that they have received a new message
    var notification = document.getElementById("notification");
    notification.innerHTML = "You have received a new message.";
  }
  
  // Chat history
  function showChatHistory() {
    // Show the chat history for the current user
    var chatHistory = document.getElementById("chat-history");
    chatHistory.innerHTML = "This is the chat history for the current user.";
  }
  
  // File attachments
  function attachFile() {
    // Allow the user to attach a file to their message
    var fileInput = document.getElementById("file-input");
    var file = fileInput.files[0];
  
    // Check if the file is a valid file type
    if (file.type === "text/plain" || file.type === "image/jpeg" || file.type === "image/png") {
      // Upload the file to the server
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/upload.php");
      xhr.onload = function() {
        if (xhr.status === 200) {
          // Successfully uploaded the file
          var attachment = document.createElement("div");
          attachment.innerHTML = "Attached file: " + file.name;
          document.getElementById("attachments").appendChild(attachment);
        } else {
          // Failed to upload the file
          alert("Failed to upload file.");
        }
      };
      xhr.send(file);
    } else {
      // Invalid file type
      alert("Invalid file type.");
    }
  }


  function savePatientData() {
    // Get the patient data from the form
    var name = document.getElementById("name").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var medicalHistory = document.getElementById("medical-history").value;
    var medications = document.getElementById("medications").value;
  
    // Save the patient data to the database
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/save-patient-data.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully saved the patient data
        alert("Patient data saved successfully.");
      } else {
        // Failed to save the patient data
        alert("Failed to save patient data.");
      }
    };
    xhr.send(JSON.stringify({
      name: name,
      dateOfBirth: dateOfBirth,
      medicalHistory: medicalHistory,
      medications: medications
    }));
  }



  function updatePatientData(event) {
    // Get the value of the edited cell
    var value = event.target.value;
  
    // Update the database
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/update-patient-data.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully updated the patient data
        alert("Patient data updated successfully.");
      } else {
        // Failed to update the patient data
        alert("Failed to update patient data.");
      }
    };
    xhr.send(JSON.stringify({
      id: event.target.dataset.id,
      name: value
    }));
  }
  
  // Attach the oninput event to all of the cells in the table
  document.querySelectorAll('td').forEach(function(td) {
    td.addEventListener('input', updatePatientData, false);
  });


  // File upload feature
function handleFileUpload(event) {
    // Get the file that was uploaded
    var file = event.target.files[0];
  
    // Upload the file to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload-file.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully uploaded the file
        alert("File uploaded successfully.");
      } else {
        // Failed to upload the file
        alert("Failed to upload file.");
      }
    };
    xhr.send(file);
  }
  
  // Chat feature
  function handleChatSend(event) {
    // Get the message that was sent
    var message = event.target.value;
  
    // Send the message to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/send-chat-message.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully sent the message
        alert("Message sent successfully.");
      } else {
        // Failed to send the message
        alert("Failed to send message.");
      }
    };
    xhr.send(JSON.stringify({
      message: message
    }));
  }
  
  // Payment feature
  function handlePaymentSubmit(event) {
    // Get the amount that was paid
    var amount = event.target.value;
  
    // Pay the amount to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/pay-amount.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully paid the amount
        alert("Amount paid successfully.");
      } else {
        // Failed to pay the amount
        alert("Failed to pay amount.");
      }
    };
    xhr.send(JSON.stringify({
      amount: amount
    }));
  }
  
  // Scheduling feature
  function handleAppointmentSubmit(event) {
    // Get the date and time of the appointment
    var date = event.target.value;
    var time = event.target.value;
  
    // Schedule the appointment with the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/schedule-appointment.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully scheduled the appointment
        alert("Appointment scheduled successfully.");
      } else {
        // Failed to schedule the appointment
        alert("Failed to schedule appointment.");
      }
    };
    xhr.send(JSON.stringify({
      date: date,
      time: time
    }));
  }
  
  // Reminder feature
  function handleReminderSubmit(event) {
    // Get the date, time, and message of the reminder
    var date = event.target.value;
    var time = event.target.value;
    var message = event.target.value;
  
    // Set the reminder with the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/set-reminder.php");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Successfully set the reminder
        alert("Reminder set successfully.");
      } else {
        // Failed to set the reminder
        alert("Failed to set reminder.");
      }
    };
    xhr.send(JSON.stringify({
      date: date,
      time: time,
      message: message
    }));
  }