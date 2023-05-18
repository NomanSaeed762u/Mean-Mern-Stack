function getGreaterage(obj){
    const [...result]=obj.map(Object=>Object.age)       //this function store the age vale in rest operator form the object
    //const (...result1)=result
    return result1=result.sort((a, b) => b - a);       //this will sort the resultant array

    //Note: we can also sort the value by nested for loop. 
}



const array=[                                         //create array type object and define differnt properties
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

console.log(getGreaterage(array))                 //call the function and pass the object