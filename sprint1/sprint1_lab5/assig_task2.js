const book= {
    title : "ENG",
    author : 'sajid',
    year : 2022
}

function book_function(des){
    const {title,author} =des;
    console.log(title)
    console.log(author)
}

book_function(book)