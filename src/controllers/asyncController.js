const data = require("../models/Data");
// exports.testing = async (req, res) => {
//   try {
//     console.log("1");
//     const waitingfordata = await new Promise((resolve, reject) => {
//       let pass;
//       setTimeout( () => {
//         console.log("2");
//         for (let i = 0; i < data.length; i++) {
//           const element = data[i];
//           if (typeof element != "number") {
//             console.log('nope');
//             pass = false;
//             break;
//           }
//           if(i == data.length-1 && typeof element == 'number' ) {
//             console.log('yes')
//             pass = true;
//           }
//         }
//         return pass;
//       }, 2000);
//       console.log("3");
//       if (pass == true) {
//         resolve('data success');
//       } else {
//         reject("data only accepts integers");
//       }
//       });
//       if (pass == true) {
//         console.log("4");
//         res.send('data successful')
//       } else {
//         console.log("5");
//       }
//   } catch (err) {
//     res.status(500).send("server error");
//     console.log(err);
//   }
// };

exports.testing = async (req, res) => {
  var waitforthis = "old value";
  await new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve()
      }
      , 5000)
      
    });
  waitforthis = data
  console.log(waitforthis);
  res.send(waitforthis);  
};
