/* Handles all interactions (Story Events)
 *
 */

import Dice from './dice';

export function initInteraction(interaction) {
  if (interaction.type === 'dice') {
    return rollDice(interaction.criteria);
  } else if (interaction.type === 'progress') {
    return true;
  }
}

function rollDice(criteria) {
  const dice = new Dice(criteria.diceSides, criteria.numberOfDice);
  const result = dice.roll();

  if (result >= criteria.success) {
    return true;
  }

  return false;
}
