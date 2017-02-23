var bcoin = require('bcoin');
var seed, key, pub, priv, pubaddr, privaddr;
seed = bcoin.hd.Mnemonic.fromPhrase('fruit wave dwarf banana earth journey tattoo true farm silk olive fence').toSeed('banana');
key = bcoin.hd.PrivateKey.fromSeed(seed);

console.log('Seed:');
console.log(seed.toString('hex'));
console.log('\n');

pub = key.derivePath("m/44'/0'/0'/0/0").publicKey;
pubaddr = new bcoin.keyring(pub);

console.log('Public:');
console.log(pubaddr);

console.log('\n');

priv = key.derivePath("m/44'/0'/0'").privateKey;
privaddr = new bcoin.keyring(priv);

console.log('Master Private:');
console.log(privaddr);
