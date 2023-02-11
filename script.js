/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(a => {
    if(a.marks>50){
      console.log(a);
    }
   })

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student =>{
    if(student.marks>50){
      console.log(student);
    }
  } )
}

function addData() {
  //Write your code here, just console.log
  let newStudnet = {id:4,name:"susan",age:"20",marks:45}
  arr.push(newStudnet)
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr= arr.filter(student =>student.marks >=50)
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "Lakshya", age: "24", marks: 89 },
    { id: 6, name: "Kola", age: "24", marks: 90},
    { id: 7, name: "Komal", age: "23", marks: 92 },
  ];
 let result= arr.concat(arr1)
  console.log(result);
}
