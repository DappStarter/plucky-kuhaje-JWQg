require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name remember stick around heavy civil army gate'; 
let testAccounts = [
"0xa906cc0a1ca2e004a272eb2cd3d15868bcc1bd2d24ec112703546d811506d6c0",
"0x60aa9f7d8700c6b633c1f189ff22e03c5e8fef3a3410d040b143797a56b7a028",
"0x2dfec12f4e783858dd5d8c4b07c0fab0b862ff0211efab6a903babf490b2697c",
"0x1dbcce681fc5cd43a9f148bf4c6794ce9d818773e7794c3b5975e90a3513e5b4",
"0xd0701ee3b75f51c53bf3a32e58453ae881fd2cc3a49c7775e3a0cb43c320db52",
"0x582a1fb5ea2c0e4bff4e54dce1dc8bdedcfa9a029ff3b2ef4f39d9742ba6df71",
"0x2ce919d17df31f8b48e65be28b0a947eac7e872c3741d18a6823f00fa078719d",
"0x7de93b79b8afb8be24c7c50906925db55b2db7518737010f823d1875ced6ad7c",
"0x1483098baf68666859fdb565472ad32c15925612c9e712d299a22d6e8883d9b3",
"0x1d10db9768ebe68bb73eea5bbba241e09f7989d1ef95d12dee4d188e1a6bbf12"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


