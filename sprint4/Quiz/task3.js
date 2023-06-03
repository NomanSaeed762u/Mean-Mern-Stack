function Get_grater_age(people){
    return people.filter(person => person.age >= 18);
}




const student= [{
    name : "Basit",
    age : 25,
    gender : "Male"
},
{
    name : "Saman",
    age : 35,
    gender : "Female"
},{
    name : "babar",
    age : 10,
    gender: "male"
},{
    name : "Ahmad",
    age : 25,
    gender : "male"
},{
    name : "sajjid",
    age : 15,
    gender: "male"
},
]


const result=Get_grater_age(student);
console.log(result)


