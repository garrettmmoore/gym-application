$(document).ready(function(){
  
    var firstNameField = $(".firstNameField");
    var lastNameField = $(".lastNameField");
    var userNameField = $(".userNameField");
    var photoField = $(".photoField");
    var gymIdField = $(".gymIdField");
    var expertForm = $("#expertForm");

    $(expertForm).on("submit", handleFormSubmit);

    function handleFormSubmit(event){

      event.preventDefault();

      if(!firstNameField.val().trim() || !lastNameField.val().trim() || 
          !userNameField.val().trim()  || !gymIdField.val().trim()){
              alert("Please fill out all the fields!");
              return;
      } 

      var newExpert = {
          firstName: firstNameField.val().trim(), 
          lastName: lastNameField.val().trim(),
          userName: userNameField.val().trim(),
          photo: photoField.val().trim(),
          gym: gymIdField.val().trim(),
          userType: "Expert"
      };

      submitPost(newExpert);
    };

    function submitPost(post){
      $.post("/expert", post, function(){
          window.location.href = "/expert-schedule?expert_id=" + post.userName + "&gym_id=" + post.gym;
      });
    };
});



