const apiResponse = {
    status: "success",
    data: {
      user: {
        name: "John Doe",
        age: 32,
        email: "johndoe@example.com",
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345"
        }
      },
      orders: [
        { id: 1, total: 100 },
        { id: 2, total: 200 },
        { id: 3, total: 300 }
      ]
    }
  };
  let {data : {user: {name,age,email}}}=apiResponse;
  
  function ApiData(apiResponse) {
      const {
        data: {
          user: { name, age, email, address: { street, city, state, zip } },
          orders
        }
      } = apiResponse;
  
      
  
      return {name, age, email, street, city, state, zip }; 
    }
  
  
    
  const processedData = ApiData(apiResponse);
  console.log(processedData);
  
  