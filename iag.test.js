const {intro, apology, expectation, closing, statement} = require('./iag.js');

const intros       = require('./data/intros.json');
const apologies    = require('./data/apologies.json');
const expectations = require('./data/expectations.json');
const closings     = require('./data/closings.json');

test('Random intro selected from intros array', () => expect(intros).toContain(intro));

test('Random apology selected from apologies array', () => expect(apologies).toContain(apology));

test('Random expectation selected from expectations array', () => expect(expectations).toContain(expectation));

test('Random closing selected from closings array', () => expect(closings).toContain(closing));

test('Statement returned anything', () => expect(statement).toEqual(expect.anything()));