
let students = [{
    name: "Asha",
    roll: 03,
    class: "12",
    section: "A",
    marks: [{
        maths: 80,
        physics: 70,
        chemistry: 90
    }]
},
    {
        name: "Usha",
        roll: 09,
        class: "11",
        section: "A",
        marks: [{
            maths: 49,
            physics: 40,
            chemistry: 78
        }]
    },
    {
        name: "Pushpa",
        roll: 38,
        class: "12",
        section: "B",
        marks: [{
            maths:59,
            physics: 68,
            chemistry: 75
        }]
    },
    {
        name: "Kiran",
        roll: 31,
        class: "11",
        section: "A",
        marks: [{
            maths: 76,
            physics: 95,
            chemistry: 63
        }]
    },
    {
        name: "Urmila",
        roll: 03,
        class: "12",
        section: "A",
        marks: [{
            maths: 83,
            physics: 60,
            chemistry: 53
        }]
    },
    {
        name: "Rashi",
        roll: 03,
        class: "11",
        section: "B",
        marks: [{
            maths: 49,
            physics: 36,
            chemistry: 73
        }]
    },
    {
        name: "Khushboo",
        roll: 03,
        class: "11",
        section: "B",
        marks: [{
            maths: 44,
            physics: 98,
            chemistry: 81
        }]
    }]


function getTotalMarks(marks){
    let total = 0;
    for (let subject in marks) {
        total += marks[subject];
    }
    return total;
}
function ques1(className, section){
    //return the name of the topper of that section with total marks

    let topperName = "";
    let topperMarks = 0;

    students.forEach(function(student){
        if(student.class === className && student.section === section){
            totalMarks = getTotalMarks(student.marks[0]);
            if(totalMarks > topperMarks){
                topperMarks = totalMarks;
                topperName = student.name;
            }
        }

    });
    return [topperName, topperMarks];

}

console.log("ques1", ques1('11','A'));


function ques2(className, subject){
    let topperName = "";
    let highestMarks = 0;
    students.forEach(function(student){
        if(student.class === className){
            studentMarks = student.marks[0][subject];
            if(studentMarks > highestMarks){
                highestMarks = studentMarks;
                topperName = student.name;
            }
        }

    });
    return topperName;
}
console.log("ques2", ques2('11','maths'));

function ques3(className){
    let studentNames = [];
    students.forEach(function(student){
        if(student.class === className){
            studentNames.push(student.name);
        }
    });

    studentNames.sort(function(a, b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
    return studentNames;
}

console.log('ques3', ques3('12'))

function ques4(){
    let allMarks = {};

    students.forEach(function(student){
        if(student.class in allMarks){
            for (var subject in student.marks[0]) {
                allMarks[student.class][subject] += student.marks[0][subject];
            }
            allMarks[student.class].count += 1;
        }
        else{
            allMarks[student.class] = student.marks[0];
            allMarks[student.class].count = 1;

        }
    });
    let averageMarks = {};
    for (var className in allMarks) {
        for (var subject in allMarks[className]) {

            val = allMarks[className][subject] / allMarks[className].count;

            averageMarks[subject] = Math.round(val * 100) / 100
        }
        delete averageMarks['count']
    }

    return averageMarks;

}

console.log('ques4', ques4())
