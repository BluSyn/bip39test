var mnemonic = require('bitcore-mnemonic');
var bitcore = require('bitcore-lib');
var seed = mnemonic('fruit wave dwarf banana earth journey tattoo true farm silk olive fence').toSeed('banana');
var xpriv = new bitcore.HDPrivateKey.fromSeed(seed);

console.log('Seed:');
console.log(seed.toString('hex'));

console.log('\n');

var derive = xpriv.derive("m/44'/0'/0'/0/0");
console.log('Pulic:');
console.log(new bitcore.PublicKey(derive.publicKey).toString());

console.log('\n');

var root = xpriv.derive("m/44'/0'/0'");
console.log('Master Private:');
console.log(new bitcore.PrivateKey(root.privateKey).publicKey.toString());
