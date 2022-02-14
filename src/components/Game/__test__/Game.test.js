import { describe, expect, it } from '@jest/globals';
import Game from '../Game';

describe('created properly', () => {
  const testGame = new Game();
  it('is an object', () => {
    expect(typeof testGame).toBe('object');
  });
  it('defines winnerDecided', () => {
    expect(testGame.winnerDecided).not.toBe(undefined);
  });
  it('defines validChoices', () => {
    expect(typeof testGame.validChoices).not.toBe(undefined);
  });
});

describe('declareWinner works', () => {
  const testGame = new Game();
  it('starts out false', () => {
    expect(testGame.winnerDecided).toBe(false);
  });
  it('can be set to true', () => {
    testGame.declareWinner();
    expect(testGame.winnerDecided).toBe(true);
  });
});

describe('round works', () => {
  const testGame = new Game();
  const rock = 'rock';
  const paper = 'paper';
  const scissors = 'scissors';
  const invalid = 'invalid';
  it('declares a draw #1', () => {
    expect(testGame.round(rock, rock)).toBe('draw');
  });
  it('declares a draw #2', () => {
    expect(testGame.round(paper, paper)).toBe('draw');
  });
  it('declares a draw #3', () => {
    expect(testGame.round(scissors, scissors)).toBe('draw');
  });
  it('declares win #1', () => {
    expect(testGame.round(paper, rock)).toBe('win');
  });
  it('declares win #2', () => {
    expect(testGame.round(rock, scissors)).toBe('win');
  });
  it('declares loss #1', () => {
    expect(testGame.round(paper, scissors)).toBe('lose');
  });
  it('declares loss #2', () => {
    expect(testGame.round(scissors, rock)).toBe('lose');
  });
  it('cannot declare a winner if parameters are invalid', () => {
    expect(testGame.round(scissors, invalid)).toBe('Unable to declare a result');
  });
  it('functions without second parameter', () => {
    expect(testGame.round(rock)).not.toBe('Unable to declare a result');
  });
});
