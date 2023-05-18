function people_info(obj){
const result_data=obj.filter((Object)=>Object.age>30)
return result_data
}
const array=[
    data1={
        name: 'sajjad',
        age:   20,
        profession :'Student'
    },
    data2={
        name: 'basit',
        age:   40,
        profession :'teacher'
    },
    data3={
        name: 'ahmad',
        age:   35,
        profession:'Docter'
    },
    data4={
        name: 'Ali',
        age:   20,
        profession :'Student'
    }
]
console.log(people_info(array))