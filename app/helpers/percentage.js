import Ember from 'ember';

export function percentage(params/*, hash*/) {
  let [amount, total] = params;
  return (amount * 100 / Math.max(total,1)).toFixed(2);
};

export default Ember.Helper.helper(percentage);
