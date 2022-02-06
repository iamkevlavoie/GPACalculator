// let Grades = [100,90,80];
// let sum = 0 ;



//     for(i=0; i < Grades.length; i++){
//         sum += Grades[i]
        
//     }
//     console.log(sum)

function computeGPA(grades){

    let sum = 0 ;
    for(let i = 0; i < grades.length; i++){
        let grade = grades[i];

        if(grade == "A"){
            sum += 100;

        }
        else if(grade == "B"){
            sum += 80;
        }
        else if(grade == "C"){
            sum += 70;
        }
    }

    let gpa = sum / grades.length
    let result = ''
    if(gpa === 100){
        result = "A";

    }
    else if(gpa >= 80 && gpa <= 99){
        result = "B";

    }
    else {
        result = "C"
    }
    console.log('Your result is', result)
}


computeGPA(["A", "A", "A", "A"]);