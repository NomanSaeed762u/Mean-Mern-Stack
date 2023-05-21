const calculateRectangleArea = require('./Area');
const Length = 6;
const Width = 4;
const rectangleArea = calculateRectangleArea(Length, Width);
console.log("The area of the rectangle is: " + rectangleArea);


const Read = require('./Read');

Read('./Read.json', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  console.log('Read data:', data);
});

const content="This is me basit, and I'm here at Class"
const write=require('./Write')
write('./write.txt', content)