/*
Error 1 (grade.html Line 9):
onsubmit="checkMark()" should be onsubmit="return checkMark()"

Error 2 (grade.html Line 17):
showtable() should be showTable()

Error 3 (grade.js Line 5):
if(name = "") should be if(name == "")

Error 4 (grade.js Line 9):
isNan() should be isNaN()

Error 5 (grade.js Line 14):
&& should be ||

Error 6 (grade.js Line 28):
getElementByID() should be getElementById()

Error 7 (grade.js Line 30):
style.colour should be style.color

Error 8 (grade.js Line 38):
for loop should start from i = 0

Error 9 (grade.js Line 42):
innerHtml should be innerHTML
*/

function checkMark() {
    // Read and validate the student's input.
    let name = document.getElementById("name").value;
    let mark = document.getElementById("mark").value;
    if (name.trim() == "") {
        alert("Name must be filled out.");
        return false;
    }
    if (mark.trim() == "") {
        alert("Mark field cannot be empty.");
        return false;
    }
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }
    mark = parseInt(mark);
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Choose a grade based on the mark.
    let grade;
    let colourClass;

    if (mark >= 80) {
        grade = "A";
        colourClass = "gradeA";
    }
    else if (mark >= 65) {
        grade = "B";
        colourClass = "gradeB";
    }
    else if (mark >= 50) {
        grade = "C";
        colourClass = "gradeC";
    }
    else {
        grade = "F";
        colourClass = "gradeF";
    }

    document.getElementById("result").innerHTML =
        name + " got grade " + grade;
    document.getElementById("result").className =
        colourClass;
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();
    return false;
}

function randomMark() {
    // Generate a random mark from 0 to 100.
    let randomNumber =
        Math.floor(Math.random() * 101);
    document.getElementById("mark").value =
        randomNumber;
}

function showTable() {
    // Display the grade ranges in a table.
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML =
        "<table>" +
        "<tr><th>Grade</th><th>Mark Range</th></tr>";
    for (let i = 0; i < grades.length; i++) {
        tableHTML +=
            "<tr>" +
            "<td>" + grades[i] + "</td>" +
            "<td>" + ranges[i] + "</td>" +
            "</tr>";
    }
    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML =
        tableHTML;
}