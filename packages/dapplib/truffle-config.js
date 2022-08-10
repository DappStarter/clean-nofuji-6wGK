require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword street dash oil pull hard light army gauge'; 
let testAccounts = [
"0x156cf4fa8542a411b05019acbe69c17e37c33d60988b6f455668994efb69f431",
"0x068b9d9482853c4491d82c4e8e93f39b52008895727b4ac43f5c2a29add6ca41",
"0x0b63de52e0ece04092f904cb42da45c5cbf63aff7667053ec3c53fe21ce8342d",
"0x508f88ea30a719d2bb5171afc202fddd2dc7ae605d7ad7df63f6e379d2687305",
"0xc2b5b54ac46cb623c0c187cbeab50d8935d1f5302a985e14a7dfd470646b5265",
"0xc4c898c080ced86d88eae44b2c1a1e03989f05ec0784dd8d9c6e4bb095de3012",
"0x5b256277cf4f7554f14f062743d68fbe5fd357f4b6866d3f0e717ac608e3b964",
"0xd280b1982061c7c56175825310b3694a5ec7fddf2e7f30d9ccb8a4434e0633f6",
"0x67be151d7242486b0b3be5647c2a3514ae3772840c2ced887562b1f6e11c288d",
"0x9bb9fd56010b270bfdfabf484d309e724cb16d41fb54a3a6a27c1161024d69ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

