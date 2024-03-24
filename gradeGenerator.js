
const studentMarks = prompt("Kindly input your marks (0-100");

// implementing the grade generator logic
if (studentMarks>=0 && studentMarks <=100){
    if(studentMarks>79){
        window.alert(`${studentMarks} is an A`)
    }else if(studentMarks>=60 && studentMarks<79){
        window.alert(`${studentMarks} is a B`)
    }else if(studentMarks>=49 && studentMarks<=59){
        window.alert(`${studentMarks} is a C`)
    }else if(studentMarks>=40 && studentMarks<49){
        window.alert(`${studentMarks} is a D`)
    }else if(studentMarks<40){
        window.alert(`${studentMarks} is an E`)
    }

}else{
    window.alert("Enter a valid marks")
}