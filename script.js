function calculateResult() {
  var score = 0;
  var totalQuestions = 4;

  var correctAnswers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
      q4: 'b'
  };

  for (var i = 1; i <= totalQuestions; i++) {
      var selectedAnswer = null;

      if (document.getElementById(`q${i}a`).checked) {
          selectedAnswer = 'a';
      } else if (document.getElementById(`q${i}b`).checked) {
          selectedAnswer = 'b';
      } else if (document.getElementById(`q${i}c`).checked) {
          selectedAnswer = 'c';
      }

      if (!selectedAnswer) {
          alert(`Vous n'avez pas répondu à la question ${i}.`);
          return;
      }

      if (selectedAnswer === correctAnswers[`q${i}`]) {
          score++;
      }
  }

  var resultText = `Vous avez répondu correctement à ${score} sur ${totalQuestions} questions.`;
  alert(resultText);
 
}
