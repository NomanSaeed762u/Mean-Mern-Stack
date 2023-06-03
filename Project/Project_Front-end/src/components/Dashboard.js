import React from "react";
import SingleChart from "./BarChart";
import "./Production.css";
import Card from "./Card";
// import PieChart from "./PieChart";
import LineChart from "./LineChart";

const Dashboard = () => {
  const chart1Labels = ["Awais", "Areeb", "Basit", "Noman", "Hamza", "Badar"];
  const chart1Data = [35361, 30091, 29330, 34665, 23337, 32297];

  const chart2Labels = ["Awais", "Areeb", "Basit", "Noman", "Hamza", "Badar"];
  const chart2Data = [0.22, 0.24, 0.23, 0.29, 0.19, 0.15];

  const chart3Labels = ["Awais", "Areeb", "Basit", "Noman", "Hamza", "Badar"];
  const chart3Data = [88, 75, 73, 87, 58, 81];

  // const chart4Labels = ["Unit A", "Unit B", "Unit C"];
  // const chart4Data = [65452, 63995, 55634];
  // const chart5Labels = ["Unit A", "Unit B", "Unit C"];
  // const chart5Data = [65452, 63995, 55634];
  const data1 = {
    labels: ['23rd May', '24th May', '25th May', '26th May', '27th May', '28th May'],
    datasets: [
      {
        label: 'Production Trend',
        data: [269817, 225993, 279732, 197339, 182232, 185081],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(0,86,179,1)',
        borderWidth: 1,
      },
    ],
  };


  return (
    <div>
      <div className="row" >
        <div className="col-lg-4" style={{marginTop:'10px'}}>
          {/* <h2 className='cards'>Production</h2> */}
          <Card heading="Total Production" number={185081} />
        </div>
        <div className="col-lg-4"style={{marginTop:'10px'}}>
          {/* <h2 className='cards'>Production</h2> */}
          <Card heading="Overall Rejection %age" number={0.22} />
        </div>
        <div className="col-lg-4"style={{marginTop:'10px'}}>
          {/* <h2 className='cards'>Production</h2> */}
          <Card heading="Overall Efficiency %age" number={77} />
        </div>
      </div>

      <div>
        <div className="row" >
          <div
            className="col-lg-4"
             style={{
              width:"410px",
               border: "1px solid #0056b3",
               backgroundColor: "whitesmoke",
                margin: "15px",
                borderRadius: '18px',
             }}
          >
            <h2 className="barhd">Production(Panels)</h2>
            <SingleChart labels={chart1Labels} data={chart1Data} />

            {/* <PieChart labels={chart5Labels} data={chart5Data} /> */}
          </div>
          <div
            className="col-lg-4"
             style={{
                width: "410px",
            //   // height: "300px",
               border: "1px solid #0056b3",
               backgroundColor: "whitesmoke",
               margin: "20px",
               borderRadius: '18px',
             }}
          >
            <h2 className="barhd">Production(Panels)</h2>

            <SingleChart labels={chart2Labels} data={chart2Data} />
          </div>

          <div
            className="col-lg-4"
            style={{
               width: "410px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
              margin: "15px",
              borderRadius: '18px',
            }}
          >
            <h2 className="barhd">Effeciency %age</h2>
            <SingleChart labels={chart3Labels} data={chart3Data} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6" style={{
                width: "700px",
              // height: "300px",
              border: "1px solid #0056b3",
              backgroundColor: "whitesmoke",
               margin: "15px",
              borderRadius: '18px',
            }}>
          <h2> </h2>
          <LineChart data={data1} />
        </div>
        <div className="col-lg-6" style={{width:'500px', margin:"10px", marginLeft:'30px'}}>
       
          <Card heading="Overall Rejection %age" number={100} />
          <br />
          <Card heading="Overall Rejection %age" number={100} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
