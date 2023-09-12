const student = [
    {id:1, name:'abul', class: 6},
    {id:2, name:'kabul Mama', class: 4},
    {id:3, name:'mokbul vai', class: 11},
    {id:4, name:'israk bhai', class: 9},
]

const sortData = (a,b)=>{
   return b.class - a.class ;


}
console.log(student.sort(sortData));
