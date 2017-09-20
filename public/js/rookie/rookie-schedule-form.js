$(document).ready(function(){
  
    var userNameField = $(".userNameField");
    var gymField = $(".gymField");
    var photoField = $(".photoField");
    var monthField = $(".monthField");
    var dayField = $(".dayField");
    var am_pmField = $(".am_pmField");
    var hourField = $(".hourField");
    var rookieScheduleForm = $(".rookieScheduleForm");

    $(rookieScheduleForm).on("submit", handleFormSubmit);

    function handleFormSubmit(event){

      event.preventDefault();

      if(!userNameField.val().trim() || !gymField.val().trim() || 
          !photoField.val().trim() || !monthField.val().trim() ||
          !dayField.val().trim() || !am_pmField.val().trim()){
              alert("Please fill out all the fields!");
              return;
      } 

      var newRookie = {
          userName: userNameField.val().trim(),
          gym: gymField.val().trim(), 
          photo: photoField.val().trim(),
          month: monthField.val().trim(),
          day: dayField.val().trim(),
          am_pm: am_pmField.val().trim(),
          time: hourField.val().trim(),
      };
      
      submitPost(newRookie);
    };

    function submitPost(post){
      $.post("/setappointment", post, function(){
          window.location.href = "/rookie-schedule?rookie_id=" + post.userName + "&gym_id=" + post.gym;
      });
    }
});
