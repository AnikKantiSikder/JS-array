
const studentArray = [
    { id: 1, name: 'Student 1', gpa: 3.99, email: 'student1@gmail.com', due: true, dueAmount: 5000 },
    { id: 2, name: 'Student 2', gpa: 3.50, email: 'student2@gmail.com', due: false, dueAmount: 0 },
    { id: 3, name: 'Student 3', gpa: 2.99, email: 'student3@gmail.com', due: true, dueAmount: 10000 },
    { id: 4, name: 'Student 4', gpa: 2.50, email: 'student4@gmail.com', due: false, dueAmount: 0 }
];

// CGPA under 3
const lowGpa = studentArray.filter((value) => {
    return value.gpa < 3;
});

// console.log(lowGpa);

const dueStudents = studentArray.filter((value) => value.due);
// console.log(dueStudents);


// Map vs Filter
// Email those students whose CGPA is under 3
// At first we have to (filter) the students of CGPA under 3
// Then using (map), sending a message to those students

const emailTemplates = studentArray
        .filter((value) => value.gpa < 3)
        .map((value) => {
            return {
                ...value,
                title: `Result published`,
                msg: `You have failed`
            }
        });

console.log(emailTemplates);