// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//tests for isPhoneNumber
test('tests valid parenthesis phone number', () => {
  expect(isPhoneNumber('(626)758-2713)')).toBe(true);
});

test('tests valid non-parenthesis phone number', () => {
  expect(isPhoneNumber('626-758-2713)')).toBe(true);
});

test('tests invalid non-parenthesis phone number', () => {
  expect(isPhoneNumber('(626)7582713)')).toBe(false);
});

test('tests invalid non-parenthesis phone number', () => {
  expect(isPhoneNumber('626-(758)2713)')).toBe(false);
});


//tests for isEmail
test('tests valid email', () => {
  expect(isEmail('justin_nguyen@gmail.com')).toBe(true);
});

test('tests valid email', () => {
  expect(isEmail('tamale53349@yahoo.com')).toBe(true);
});

test('tests invalid email', () => {
  expect(isEmail('!!!hello@gmail.com')).toBe(false);
});

test('tests invalid email', () => {
  expect(isEmail('testemail.gmail.com')).toBe(false);
});


//tests for isStrongPassword
test('tests valid password', () => {
  expect(isStrongPassword('Justin123')).toBe(true);
});

test('tests valid password', () => {
  expect(isStrongPassword('BaDpAsSwOrD')).toBe(true);
});

test('tests invalid password', () => {
  expect(isStrongPassword('8hello')).toBe(false);
});

test('tests invalid password', () => {
  expect(isStrongPassword('HELLOMYNAMEISASDHASJDH....')).toBe(false);
});


//tests for isDate
test('tests valid date', () => {
  expect(isDate('01/01/2028')).toBe(true);
});

test('tests valid date', () => {
  expect(isDate('1/01/1238')).toBe(true);
});

test('tests invalid date', () => {
  expect(isDate('011/11/1029')).toBe(false);
});

test('tests invalid date', () => {
  expect(isDate('01/1/12334')).toBe(false);
});


//tests for isHexColor
test('tests valid hexColor', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('tests valid hexColor', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('tests valid hexColor', () => {
  expect(isHexColor('#1234')).toBe(false);
});

test('tests valid hexColor', () => {
  expect(isHexColor('#A1234')).toBe(false);
});