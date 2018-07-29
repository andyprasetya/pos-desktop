const state = {
  firstName: 'Lorem',
  lastName: 'Ipsum',
  storeName: 'UD. Consectetur Amet Dolor'
};

const getters = {
  getRealName: state => {
    return [state.firstName, state.lastName].join(' ');
  },

  getStoreName: state => {
    return state.storeName;
  }
};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
