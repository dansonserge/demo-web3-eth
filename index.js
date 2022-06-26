let Web3 = require('web3');

//url ganache
let ganache_url = "http://127.0.0.1:7545";

// add Ganache and infura
let infura_url = "https://mainnet.infura.io/v3/664fa3fbe7d5491082526417682dc3c3";

let web3 = new Web3(infura_url);

//SHOW ACCOUNT BALANCE
let topAddress = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

web3.eth.getBalance(topAddress, function(error, balance){
    if(!error){
        console.log(`Account Balance is: ${web3.utils.fromWei(balance, 'ether')}`);
    }else{
        console.log(error);
    }
});

//Get the latest block number
web3.eth.getBlockNumber().then(result=>{
    console.log(`The latest block number is: ${result}`);
});


/*
//get 10 latest blocks

web3.eth.getBlockNumber().then(result=>{

    let prevBlocksCount = 10;

    console.log(`number of ${prevBlocksCount} lastest blocks`);

    for(let i=0; i<=prevBlocksCount; i++){
        web3.eth.getBlock(result-1).then(block=>{
                console.log(block.number);
        });
    }
});

*/



/*

//view block details by block number (time, size, transactions list, nonce)
web3.eth.getBlock(15024893).then(block=>{
   console.log(block);
});

*/


// get block number using strings("latest", "pending")

web3.eth.getBlock('latest').then(block=>{
    console.log(`Latest block bymber = ${block.number}`);
 });

 web3.eth.getBlock('pending').then(block=>{
    console.log(`Pending block number = ${block.number}`);
 });


 //get transaction from block on a specific index

 web3.eth.getTransactionFromBlock(15025107, 2).then(console.log);

























