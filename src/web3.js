import Web3 from 'web3';


const web3Provider = window.web3 ? window.web3.currentProvider : null;
const web3 = web3Provider
  ? new Web3(web3Provider)
  : new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.defaultAccount = web3.eth.accounts[0];

export default web3;
