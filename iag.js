const intros       = require('./intros.json');
const apologies    = require('./apologies.json');
const expectations = require('./expectations.json');
const closings     = require('./closings.json');

const randomIndex = (a) => Math.floor(Math.random() * (a.length))

const intro       = intros[randomIndex(intros)];
const apology     = apologies[randomIndex(apologies)];
const expectation = expectations[randomIndex(expectations)];
const closing     = closings[randomIndex(closings)];
const statement   = intro + ' ' 
                    + apology + ' '
                    + expectation + ' '
                    + closing;

console.log(statement);

exports.intro = intro;
exports.apology = apology;
exports.expectation = expectation;
exports.closing = closing;
exports.statement = statement;