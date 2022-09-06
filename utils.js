
const Web3= require('web3');
const web3=new Web3("http://localhost:8545");

const privateKey1=`0xe74c1d80bc11f95923c7f9de4817b80440be19f23ece416851b1eb8938e23311`;

const deployers_Account = web3.eth.accounts.wallet.add(privateKey1);

module.exports={ 
    web3localhost:web3//synonyms same
    ,
    deployers_Account:deployers_Account
};



//  Notes
// npm i --save 
// ether.js web3.py
// console.log(web3);
// we can directly use our wallet to directly use the signtransaction 
// function to send to send transactions to the blockchain 
// other wise use web3.js
// //depoly.jstarted
// console.log(deployers_Account);
// {
//     address: '0x068994eAcE8F29dEC539B59E49844d6c16d98175',
//     privateKey: '0xc082aed87bef91bcf5c9ab29b604142e0c22b677edfa9e2294fec7897052ddfb',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt],
//     index: 0
//   }
//to sign the trasaction it will use sign trasnaciton funciton as it has private key heere