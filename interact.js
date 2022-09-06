const {web3localhost,deployers_Account}=require('./utils');
const contractArtifacts=require('./contractArtifacts');

let contract =new web3localhost.eth.Contract(JSON.parse(contractArtifacts.abi),contractArtifacts.contractAddress);


async function get(){
    let getv= await contract.methods.getData().call();//promise is given that object will be returned but notright now
    return getv;
}


async function set(value){
  let setv= await contract.methods.setData(value).send(
        {from :deployers_Account.address,
    gas:1000000});
    return setv.transactionHash;;
}


window.addEventListener('load', () => {
  document.getElementById("get").onclick = () => {
    get().then(
      function(getv) {
      document.getElementById("resultOfGet").innerHTML = getv;
    },
   function(error) {console.log((error));}
    )
  }
  document.getElementById("set").onclick = () => {
    val = document.getElementById("value").value
    set(val).then(
      function(setv){
      document.getElementById("resultOfSet").innerHTML = setv;
    }, function(error) {console.log((error));})
  }
})

















// notes: 
//our web 3 dont n=kno that we hav edeployed a contract so
//deployed contract object hat we can iteract with
//to access fucniton writtten in samrt contract set and get
// console.log(contract);
//methods objec tand jsoninterface is used most
//promise is given that object will be returned but notright now
//resceipt ismreturned
//sending a trasaction to the contract  toeeceute


// window.document.getElementById("currentStatus").onclick(()=>{
//     get().then(
//       function(value) {console.log((value));},
//       function(error) {console.log((error));}
//     );
//    });


//   window.document.getElementById("get").onclick(()=>{
//     get().then(
//       function(value) {
//         document.getElementById("getOutput").innerHTML = value;
//       }
//       ,
//       function(error) {console.log((error));}
//     );
//    });
    
//    window.document.getElementById("setInput").onclick(()=>{
//     set(document.getElementById("value").value).then(
//       function(value) {
//         document.getElementById("getOutput").innerHTML = value;
//       }
//       ,
//       function(error) {document.getElementById("getOutput").innerHTML = error;}
//     );
//    });

      
//world state no changed only reading avaluue
//two types of transaction
//message call
//other initalizatin of contract object


//we have parsed abi as striing
//templeate literal work differnetly
// for interacting with the browser
// window.addEventListener('load', () => {
//   document.getElementById("get").onclick = () => {
//     get().then((r) => {
//       document.getElementById("resultOfGet").innerHTML = r
//     })
//   }
//   document.getElementById("set").onclick = () => {
//     val = document.getElementById("value").value
//     set(val).then((r) => {
//       document.getElementById("resultOfSet").innerHTML = r
//     })
//   }
// })





