// const quarterOf = (month) => {
//     let year = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

//     let writeMonth = month.toLowerCase()
//     let foundMonth = year.find(month => month === writeMonth)
//     let number;
//     let monthNumber = year.indexOf(foundMonth) + 1

//     if ((foundMonth === "january") || (foundMonth === "february") || (foundMonth === "march")) {
//         number = 1
//         console.log(`${number} <= ${foundMonth} <= ${monthNumber}`);
//     } else if ((foundMonth === "april") || (foundMonth === "may") || (foundMonth === "june")) {
//         number = 2
//         console.log(`${number} <= ${foundMonth} <= ${monthNumber}`);
//     } else if ((foundMonth === "july") || (foundMonth === "august") || (foundMonth === "september")) {
//         number = 3
//         console.log(`${number} <= ${foundMonth} <= ${monthNumber}`);
//     } else if ((foundMonth === "october") || (foundMonth === "november") || (foundMonth === "december")) {
//         number = 4
//         console.log(`${number} <= ${foundMonth} <= ${monthNumber}`);
//     }
// }
// quarterOf("december")

//-----------------------------------------------

// const quarterOf = (month) => {
//     let year = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
//     let number;
//     let monthNum = month;

//     let foundMonth = year.find(month => month === monthNum);
//     let monthNumber = year[foundMonth]

//     // let monthNumber = year.indexOf(year[foundMonth - 1]) + 1

//     if ((foundMonth === 1) || (foundMonth === 2) || (foundMonth === 3)) {
//         number = 1;
//         console.log(`${number} <= ${monthNumber} <= ${foundMonth}`);

//     }
// }

// quarterOf(3)

// const quarterOf = (month) => {
//     let year = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
//     let number;

//     let foundMonth = Math.floor(Math.random() * year.length + 1)
//     let monthNumber = year[foundMonth]

//     // let monthNumber = year.indexOf(year[foundMonth - 1]) + 1

//     if ((foundMonth === 1) || (foundMonth === 2) || (foundMonth === 3)) {
//         number = 1;
//         console.log(`${number} <= ${monthNumber} <= ${foundMonth}`);

//     } else if ((foundMonth === 4) || (foundMonth === 5) || (foundMonth === 6)) {
//         number = 2;
//         console.log(`${number} <= ${monthNumber} <= ${foundMonth}`);

//     } else if ((foundMonth === 7) || (foundMonth === 8) || (foundMonth === 9)) {
//         number = 3;
//         console.log(`${number} <= ${monthNumber} <= ${foundMonth}`);

//     } else if ((foundMonth === 10) || (foundMonth === 11) || (foundMonth === 12)) {
//         number = 4;
//         console.log(`${number} <= ${monthNumber} <= ${foundMonth}`);
//     }
// }
// quarterOf(1)







// const quarterOf = (month) => {
//     let quarter; 
//     //let newMonth; 

//     if((month < 1) || (month > 12)){
//       console.log("No")
//     }

//     if ((month === 1) || (month === 2) || (month === 3)) {
//     quarter = 1;      
//       if(month === 1){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 2){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 3){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }
//     }

//      if ((month === 4) || (month === 5) || (month === 6)) {
//     quarter = 2;      
//       if(month === 4){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 5){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 6){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }
//     }

//        if ((month === 7) || (month === 8) || (month === 9)) {
//     quarter = 3;      
//       if(month === 7){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 8){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 9){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }
//     }

//        if ((month === 10) || (month === 11) || (month === 12)) {
//     quarter = 4;      
//       if(month === 10){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 11){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }else if(month === 12){
//         console.log(`Month ${month} = quarter ${quarter}`)
//       }
//     }
// }

// quarterOf(3)

const quarterOf = (month) => {
    let quarter;
    //let newMonth; 
    
    if ((month < 1) || (month > 12)) {
        console.log("No")
    }

    if ((month === 1) || (month === 2) || (month === 3)) {
        quarter = 1;
        console.log(quarter);
    }

    if ((month === 4) || (month === 5) || (month === 6)) {
        quarter = 2;
        console.log(quarter);
    }

    if ((month === 7) || (month === 8) || (month === 9)) {
        quarter = 3;
        console.log(quarter);
    }

    if ((month === 10) || (month === 11) || (month === 12)) {
        quarter = 4;
        console.log(quarter);
    }
}

quarterOf(12)