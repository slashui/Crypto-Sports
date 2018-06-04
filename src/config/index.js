import cardsData from './cards.json';

/* eslint-disable import/prefer-default-export */

export const network = {
  1: {
    default: true, // It will be used when no metaMask
    name: 'Main Ethereum Network',
    contract: '0x8b0b4e4e389cd2f1a8b7d91b5c6537efa7f08f12',
    rpc: 'https://mainnet.infura.io/lzQ5aMUU8n2wunzaQ5xT',
  },
  2: {
    name: 'Morden Test Network',
    contract: '',
  },
  3: {
    name: 'Ropsten Test Network',
    contract: '',
    rpc: 'https://ropsten.infura.io/lzQ5aMUU8n2wunzaQ5xT',
  },
  4: {
    name: 'Rinkeby Test Network',
    contract: '',
    rpc: 'https://rinkeby.infura.io/lzQ5aMUU8n2wunzaQ5xT',
  },
  42: {
    name: 'Kovan Test Network',
    contract: '',
    rpc: 'https://kovan.infura.io/lzQ5aMUU8n2wunzaQ5xT',
  },
};

export const defaultNetwork = Object.values(network).find(net => net.default);

export const cards = cardsData;

export const i18n = [
  {
    langDisplay: '简体中文',
    locale: 'zh',
    aliases: ['zh', 'zh-cn'],
  },
  {
    langDisplay: '繁体中文',
    locale: 'tw',
    aliases: ['zh-hk', 'zh-sg', 'zh-tw'],
  },
  {
    langDisplay: 'English',
    locale: 'en',
    aliases: ['en', 'en-us', 'en-au', 'en-bz', 'en-ca', 'en-ie', 'en-jm', 'en-nz', 'en-ph', 'en-za', 'en-tt', 'en-gb', 'en-zw'],
  },
  {
    langDisplay: '한국어',
    locale: 'ko',
    aliases: ['ko', 'ko'],
  },
];
