$(document).ready(function(){
     
     
     var correct = ["2009", "1867", "Ankara", "Mercury"];
     var questions = [    "Which year Nazarbayev University was founded?",    "Which year Harper's Bazaar was founded?(1867)",    "What is the Capital of Turkey?(Ankara)",    "What is the closest planet to the Earth?(Mercury)"  ];
     var choice_options = [    ["2009","2010","2011","2012"],
       ["1896","1867","1995","1977"],
       ["Istanbul", "Ankara", "İzmir", "Antalya"],
       ["Venus", "Mars", "Mercury", "Uranus"]
     ];
     
    
     var quizBox = $("#quiz-box");
     
     for (var i = 0; i < questions.length; i++) {
      var questionDiv = $("<div class='question'>");
      questionDiv.append("<p class='d'>Q" + (i+1) + ". " + questions[i] + "</p>");
    
      for (var j = 0; j < choice_options[i].length; j++) {
        var optionLabel = $("<label>");
        var optionInput = $("<input type='radio' name='q" + (i+1) + "' value='" + choice_options[i][j] + "'>");
        optionLabel.append(optionInput);
        optionLabel.append(" " + choice_options[i][j]);
        questionDiv.append(optionLabel);
      }
    
      quizBox.append(questionDiv);
    }    
     
     
     var countCorrect = 0;
     var reset = false;
     
     $("button").click(function(event) {
      countCorrect = 0;
      
      for (var i = 0; i < questions.length; i++) {
        var selectedAnswer = $("input[name='q" + (i+1) + "']:checked").val();
        if (selectedAnswer === correct[i]) {
          countCorrect++;
        }
      }
      
      $("#quiz-result").html("<h2>Result of the quiz is: " + countCorrect + " out of " + questions.length + "</h2>");
    });
    
    
    
   });
   