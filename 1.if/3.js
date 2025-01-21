function showGreeting(name, age, isStudent) {
    console.log(name, age, isStudent);

    //start solution
    let studentSentence = "Ik ben geen student.";

    if(isStudent) {
        studentSentence = "Ik ben een student."
    }

    return "Hallo, mijn naam is "+ name + ", ik ben " + age + " jaren oud. " + studentSentence;
    //end

    return "";
}