function Display_student_Information(){
    const {name, age, grade}=student
    console.log("Total student information is:",student)
    console.log("The name of the student is:",name);
    console.log("The age is:",age);
    console.log("The grade is:",grade);
}



const student= {
    name : "Basit",
    age : 25,
    grade: 3.5
}

Display_student_Information(student)