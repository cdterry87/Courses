import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';
import {
  GET_HEROES,
  ADD_HERO,
  UPDATE_HERO,
  DELETE_HERO,
} from './mutation-types';

Vue.use(Vuex);

const state = {
  heroes: [],
};

const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
  [ADD_HERO](state, hero) {
    state.heroes.push(hero);
  },
  [DELETE_HERO](state, hero) {
    state.heroes = [...state.heroes.filter(h => h.id !== hero.id)];
  },
  [UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(h => h.id === hero.id);
    state.heroes.splice(index, 1, hero);
    // state.heroes = [...state.heroes]; // another option for updating
  },
};

const actions = {
  // actions let us get context which contains:
  // { state, getters, commit, dispatch }
  async getHeroesAction({ commit }) {
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },
  async addHeroAction({ commit }, hero) {
    const addedHero = await dataService.addHero(hero);
    commit(ADD_HERO, addedHero);
  },
  async deleteHeroAction({ commit }, hero) {
    const deletedHeroId = await dataService.deleteHero(hero);
    commit(DELETE_HERO, deletedHeroId);
  },
  async updateHeroAction({ commit }, hero) {
    const updatedHero = await dataService.updateHero(hero);
    commit(UPDATE_HERO, updatedHero);
  },
};

const getters = {
  getHeroById: state => id => state.heroes.find(h => h.id === id),
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
});
