
const {web3localhost,deployers_Account}=require('./utils');
const contractArtifacts=require('./contractArtifacts');

async function deploy(){

  await web3localhost.eth.sendTransaction({
    from : deployers_Account.address,//hash of the transaction is created as soon as this object is created
        gas:   2000000,
        data : contractArtifacts.bytecode,
      }).on(  'receipt', (error,receipt) => {
        if (error) console.error(error);
        else {
          console.log(receipt);
        }
      }
      );
    };
    
    
    deploy();
    
    
// notes:  
//other initalizatin of contract object
//broadacsts transcation withcontract to network
//broadacasted or included in block or not
//reciept of contract transaction means that contract transaction has 
//been acceepted in network by the nodes by nodes and miners and is minied
//included in the block and we will get a contract address





















































 /*
 https://web3js.readthedocs.io/en/v1.2.0/web3-eth.html#sendtransaction
  * deploying is specil  type of transaction 
    where we send data as the byte code eVM will 
  * interpret it as the transaction that requires 
    it to create a smart contract 
    async way of telling JavaScript to execute the
    functions or the calls that I will be
    having inside in a in a incremental
    manner so I want certain functions to be
    executed before certain other functions 
  *
 
 */