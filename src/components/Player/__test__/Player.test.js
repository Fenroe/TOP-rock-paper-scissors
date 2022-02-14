import { expect, it } from '@jest/globals';
import Player from '../Player';

it('is an object', () => {
  const testPlayer = new Player();
  expect(typeof testPlayer).toBe('object');
});

it('returns score via getter', () => {
  const testPlayer = new Player();
  expect(testPlayer.score).toBe(0);
});

it('increases score', () => {
  const testPlayer = new Player();
  testPlayer.increaseScore();
  expect(testPlayer.score).toBe(1);
});
