function checkEnter(event) {
    if (event.key === 'Enter') {
    calculateGrade();
    }
    }
    function calculateGrade() {
    var score = document.getElementById('score').value;
    var grade = "";
    if (score >= 80) {
    grade = "A";
    } else if (score >= 60) {
    grade = "B";
    } else if (score >= 40) {
    grade = "C";
    } else if (score >= 0) {
    grade = "F";
    } else {
    grade = "Invalid Score";
    }
    document.getElementById('grade').innerText = grade;
    }
    