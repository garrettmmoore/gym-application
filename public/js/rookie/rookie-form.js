$(document).ready(function(){
  
    var firstNameField = $(".firstNameField");
    var lastNameField = $(".lastNameField");
    var userNameField = $(".userNameField");
    var photoField = $(".photoField");
    var gymIdField = $(".gymIdField");
    var rookieForm = $("#rookieForm");

    $(rookieForm).on("submit", handleFormSubmit);

    function handleFormSubmit(event){

      event.preventDefault();

      if(!firstNameField.val().trim() || !lastNameField.val().trim() || 
          !userNameField.val().trim() || !gymIdField.val().trim()){
              alert("Please fill out all the fields!");
              return;
      } 

      var newRookie = {
          firstName: firstNameField.val().trim(), 
          lastName: lastNameField.val().trim(),
          userName: userNameField.val().trim(),
          photo: photoField.val().trim(),
          gym: gymIdField.val().trim(),
          userType: "Rookie"
      };
      
      console.log(newRookie);
      submitPost(newRookie);
    };

    function submitPost(post){
      $.post("/rookie", post, function(){
          window.location.href = "/rookie-schedule?rookie_id=" + post.userName + "&gym_id=" + post.gym;
      });
    }
});

