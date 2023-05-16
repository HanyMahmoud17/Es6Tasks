
//task 1

// let arr=[10,20];
// let arr2=arr;
// // console.log(arr2);
// var [x,y]=arr2

// console.log(`x : ${x}`);
// console.log(`y : ${y}`);

// var [y,x]=arr

// console.log(`x : ${x}`);
// console.log(`y : ${y}`);

//task 2


// function maxAndMin(...arg){
//   let max=Math.max(...arg)
//   let min=Math.min(...arg)

//   console.log(max);
//   console.log(min);

// }

// maxAndMin(1,2,3,4,5,6,7)


// task 3

// let student={
//   name :"ali",
//   University : "mansoura",
//   faculty : "engineer",
//   finalGrade : 85
// }

// console.log(`${student.name} is a student in faculty of ${student.faculty} in university ${student.University}And his final grad is ${student.finalGrade}.`);


// task 4

// var countries=new Set(["egyt","USA", "Canada", "Japan", "Germany", "USA"])

// console.log(...countries);

// for(var item of countries){
//   console.log(item);
// }

// let uniqueCountry=["egyt","USA", "Canada", "Japan", "Germany", "USA","egyt"]

// let numofUnique=uniqueCountry.length-countries.size
// console.log(numofUnique);

// //function to show difference
// function diff(s1,s2){
//   var res=new Set(s1)
 
//   for(var item of s2){
//     res.delete(item)
//   }
  
// return res
// }

// let s1=new Set([1,2,3,4,5,6,7,8,9])
// let s2=new Set([1,2,3,4,5,6])

// let S1differenceS2=diff(s1,s2)
// console.log(S1differenceS2);

// //function to show adding
// function add(s1,s2){
//   var result=new Set(s1)
//   for(var item of s2){
//     result.add(item)
//   }
// return result
// }

// let S1addToS2=add(s1,s2)
// console.log(S1addToS2);


// //another solution to adding
// let adding=new Set([...s1,...s2])
// console.log(adding);




// task 5

  // let mp=new Map()


  // let negmcourses=[
  //   {Coursename:"JavaScript", Grade:"Excellent"},
  //   {Coursename:"Jquery", Grade:"Good"},
  //   {Coursename:"React", Grade:"V.Good"},
  //   {Coursename:"ESNext", Grade:"Good"},
  //   {Coursename:"NodeJS", Grade:"V.Good"}];

  // mp.set("negm",negmcourses)

  // first way to show name and coureses
  // mp.forEach((courses, student) => {
  //   console.log(`studentName : ${student}`);
  //   courses.forEach((course) => {
  //     console.log(`Coursename :${course.Coursename} and its grade is : [ ${course.Grade} ]`);
  //   });
  // });



  // second way to show name and coureses
  // let arr=[...mp]
  // for(var i=0;i<arr.length;i++){

  // let StudentName=arr[0][0]
  // console.log(`studentName : ${StudentName}`);

  // let Coursename=  arr[0][1]
  // for(var j=0;j<Coursename.length;j++){
  //   console.log(`Coursename :${Coursename[j].Coursename} and its grade is : [ ${Coursename[j].Grade} ]`);
  // }

  // }



  //to display grades of student
  // function studentGrades(){
  //  var grades=document.getElementById('grades') 
  //  var show=mp.forEach((courses, student) => {
  //     courses.forEach((course) => {
  //       grades.innerHTML+=(`Coursename :${course.Coursename} and its grade is : [ ${course.Grade} ] <br>`);
  //     });
  //   });
  
  // }










