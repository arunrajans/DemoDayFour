import Ember from 'ember';

export function routeQuery([a]) {
  return a+20;
}

export default Ember.Helper.helper(routeQuery);
