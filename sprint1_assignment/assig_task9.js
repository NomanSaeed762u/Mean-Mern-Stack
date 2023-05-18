function getGreaterByFind(obj){
    const result= obj.find(items=>items.year>=2000);
    return result
}



const array_obj=[
    data1={
        title : 'Enghlish',
        year : 1999
    },
    data2={
        title : 'Urdu',
        year : 2000
    },
    data3 = {
        title : 'Pysics',
        year : 2005
    }
]
console.log(getGreaterByFind(array_obj))