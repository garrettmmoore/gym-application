$(document).ready(function() {
    
        var appointmentContainer = $(".myRes-container");
        var user = $(".userWelcome");
        var appointments;
    
        getAppointments();
    
        var url = window.location.search;
        var expertId;
        if (url.indexOf("?expert_id=") !== -1) {
          expertId = url.split("=")[1].split("&")[0];
          getAppointments(expertId);
    
        }
        else {
          getAppointments();
        };
    
        function getAppointments(expert){
            expertId = expert || "";
            $.get("/appointments/" + expertId, function(data){
                appointments = data;
                userWelcome(expert);
                if (!appointments || !appointments.length) {
    
                    displayEmpty(expert);
                }
                else {
                    showAppointments();
                }  
            })
        };
    
        function userWelcome(id){
            var messageh1 = $("<h1>");
            messageh1.css({ "text-align": "center", "margin-top": "50px" });
            messageh1.text("Welcome: " + id + "!");
            user.prepend(messageh1);
        };
    
        function showAppointments(){
            appointmentContainer.empty();
            var resToAdd = [];
            for(var i = 0; i < appointments.length; i ++){
                resToAdd.push(createNewAppointment(appointments[i]));
            }
            appointmentContainer.append(resToAdd);
        };
    
        function createNewAppointment(appointment){
            var newCardDeck = $("<div class='card-deck'>");
            var newCardDiv = $("<div class='card text-center' style='width: 20rem;'>");
            var newCardImg = $("<img class='card-img-top' src='" + appointment.photo +  "' alt='Card image cap'>");
            var nextNewDiv = $("<div class='card-body'>");
            var cardTitle = $("<h4 class='card-title'>").text("Rookie: " + appointment.userName);
            var newResBody = $("<p class='card-text'>").text("Gym: " + appointment.gym);
            var newMonthBody = $("<p class='card-text'>").text("Month: " + appointment.month + " Day: " + appointment.day);
            var newTimeBody = $("<p class='card-text'>").text("Time: " + appointment.time + " " + appointment.am_pm);
            var button = $("<a href='#' class='btn btn-primary'>").text("Reserve");
    
            $(".myRes-container").append(newCardDeck);
            newCardDeck.append(newCardDiv);
            newCardDiv.append(newCardImg);
            newCardDiv.append(nextNewDiv);
            nextNewDiv.append(cardTitle);
            nextNewDiv.append(newResBody);
            nextNewDiv.append(newMonthBody);
            nextNewDiv.append(newTimeBody);
            nextNewDiv.append(button);
    
            return newCardDiv;
        };    
    
        function displayEmpty(id) {
            var query = window.location.search;
            var partial = "";
            if (id) {
            partial = " for expert User: " + id;
            }
            appointmentContainer.empty();
            var messageh2 = $("<h2>");
            messageh2.css({ "text-align": "center", "margin-top": "50px" });
            messageh2.html("No Scheduled Appointments yet" + partial);
            appointmentContainer.append(messageh2);
      }
    });