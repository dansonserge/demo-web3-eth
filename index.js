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
})





















