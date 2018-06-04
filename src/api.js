import Web3 from 'web3';
import FBMarginABI from './abi/FBMargin.json';
import Promise from 'bluebird';
import * as config from './config';
import { BigNumber } from 'bignumber.js';


// Sometimes, web3.version.network might be undefined,
// as a workaround, use defaultNetwork in that case.
//const network = config.network[web3.version.network] || config.defaultNetwork;
//const FBContract = web3.eth.contract(FBMarginABI).at(network.contract);
//虚拟网络配置信息testRPC
let provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
provider.eth.defaultAccount = provider.eth.accounts[0];
let acc = 1111;
let FBMContract = web3.eth.contract(FBMarginABI);


let FBContract = FBMContract.at('0x8b0b4e4e389cd2f1a8b7d91b5c6537efa7f08f12');


//Rocknetwork = 0xf009451e2a5d232cb081cda1e6271f80de4de771

//虚拟网络配置信息testRPC
//let provider = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//provider.eth.defaultAccount = provider.eth.accounts[0];
//let FBMContract = web3.eth.contract(FBMarginABI);
//let FBContract = FBMContract.at('0x8b0b4e4e389cd2f1a8b7d91b5c6537efa7f08f12');

let store = [];
let isInit = false;

//Contract name
export default FBContract;





//get all items number 
export const getTotal = () => Promise.promisify(FBContract.totalSupply)();

export const getItemIds = async (offset, limit) => {
  let ids = await Promise.promisify(FBContract.itemsForSaleLimit)(offset, limit);
  ids = ids.map(id => id.toNumber());
  ids.sort((a, b) => a - b);
  return Array.from(new Set(ids));
};

export const getItemsOf = async (address) => {
  let ids = await Promise.promisify(FBContract.tokensOf)(address);
  ids = ids.map(id => id.toNumber());
  
  return Array.from(new Set(ids));
};

export const getItem = async (id) => {
  const exist = await Promise.promisify(FBContract.tokenExists)(id);
  if (!exist) return null;
  const card = config.cards[id] || {};
  const item = {
    id,
    name: card.name,
    nickname: card.nickname,
  };
  [item.owner, item.price, item.nextPrice] =
    await Promise.promisify(FBContract.allOf)(id);

  // [[item.owner, item.price, item.nextPrice], item.estPrice] = await Promise.all([
  //   Promise.promisify(cryptoWaterMarginContract.allOf)(id),
  //   getNextPrice(id)]);
  // item.price = BigNumber.maximum(item.price, item.estPrice);
  return item;
};


export const toReadablePrice = (fromPrice, fromUnit = 'wei') => {
  const priceInWei = web3.toWei(fromPrice, fromUnit);
  let price;
  let unit;

  if (BigNumber(priceInWei).isLessThan(BigNumber('1000000000000'))) {
    price = priceInWei;
    unit = 'Wei';
  } else {
    price = web3.fromWei(priceInWei, 'ether');
    unit = 'ETH';
  }
  return { price, unit };
};


export const buyItem = (id, price) => new Promise((resolve, reject) => {
  FBContract.buy(id, {
    value: price, // web3.toWei(Number(price), 'ether'),
    gas: 220000,
    gasPrice: 1000000000 * 100,
  },
  (err, result) => (err ? reject(err) : resolve(result)));
});

export const getMe = async () => {
  if (!window.web3) {
    throw Error('NO_METAMASK');
  }
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((error, accounts) => {
      const address = accounts[0];
      if (address) {
        return resolve({ address });
      }
      return reject(new Error('METAMASK_LOCKED'));
    });
  });
};


export const getNetwork = async () => {
  const netId = await Promise.promisify(web3.version.getNetwork)();
  return config.network[netId];
};


export const getLocale = async () => (
  Cookie.get('locale') ||
  (
    navigator.language ||
    navigator.browserLanguage ||
    navigator.userLanguage
  ).toLowerCase()
);

export const setLocale = async (locale) => {
  Cookie.set('locale', locale, { expires: 365 });
};