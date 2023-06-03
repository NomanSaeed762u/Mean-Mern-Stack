import React from "react";
// import SingleChart from "./BarChart";
import "./Production.css";
// import Card from "./Card";
import PieChart from "./PieChart";
import LineChart from "./LineChart";


const Kpi = () => {
  // const chart1Labels = ["Awais", "Areeb", "Basit", "Noman", "Hamza", "Badar"];
  // const chart1Data = [35361, 30091, 29330, 34665, 23337, 32297];

  // const chart2Labels = ["Awais", "Areeb", "Basit", "Noman", "Hamza", "Badar"];
  // const chart2Data = [0.22, 0.24, 0.23, 0.29, 0.19, 0.15];

  // const chart3Labels = ["Awais", "Areeb", "Basit", "Noman", "Hamza", "Badar"];
  // const chart3Data = [88, 75, 73, 87, 58, 81];


   const chart5Labels = ["Dyeing", "Knitting", "Cutting","Printing", "Embriodery", "Stitching", "Quality"];
   const chart5Data = [27, 19, 9, 12, 21, 10, 2];
   const chart6Labels = ["Dyeing", "Knitting", "Cutting","Printing", "Embriodery", "Stitching", "Quality"];
   const chart6Data = [27987, 19357, 9249, 12781, 21659, 10274, 23990];
   const chart7Labels = ["Dyeing", "Knitting", "Cutting","Printing", "Embriodery", "Stitching",];
   const chart7Data = [5798, 1935, 524, 1678, 2565, 927];
  const data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Production Efficiency %age',
        data: [92, 91, 89, 85, 78],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(0,86,179,1)',
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Quality Assurance %age',
        data: [92.4, 91.5, 89.9, 96.3, 97.9],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(0,86,179,1)',
        borderWidth: 1,
      },
    ],
  };
  const data3 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Cost Efficiency %age',
        data: [92, 91, 89, 85, 73],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(0,86,179,1)',
        borderWidth: 1,
      },
    ],
  };

  


  return (
    <div>
      
      <div className="row">
        <div className="col-lg-4" style={{
                 width: "400px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "20px",
              borderRadius: '18px',
            }}>
          <h2> </h2>
          <LineChart data={data1} />
        </div>
        <div className="col-lg-4" style={{
                 width: "400px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "20px",
              borderRadius: '18px',
            }}>
          <h2> </h2>
          <LineChart data={data2} />
        </div>
        <div className="col-lg-4" style={{
                 width: "400px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "15px",
              borderRadius: '18px',
            }}>
          <h2> </h2>
          <LineChart data={data3} />
        </div>
      </div>
      <div className="row">
      <div className="col-lg-4" style={{
                 width: "400px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "20px",
              borderRadius: '18px',
            }}>
          <h2 style={{fontSize:"25px"}}>Department Wise Shortfalls</h2>
          <PieChart labels={chart5Labels} data={chart5Data} /> 
        </div>
        <div className="col-lg-4" style={{
                 width: "400px",
              // height: "300px",         
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "20px",
              borderRadius: '18px',
            }}>
          <h2 style={{fontSize:"25px"}}>Department Wise Pending Stock</h2>
          <PieChart labels={chart6Labels} data={chart6Data} /> 
        </div>
        <div className="col-lg-4" style={{
                 width: "400px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "20px",
              borderRadius: '18px',
            }}>
          <h2 style={{fontSize:"25px"}}>Pending Stock at Quality</h2>
          <PieChart labels={chart7Labels} data={chart7Data} /> 
        </div>
        
      </div>
    </div>
  );
};



export default Kpi;