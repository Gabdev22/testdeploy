import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_COORDINATE,
  DELETE_COORDINATE,
  UPDATE_COORDINATE
} from "./mutationTypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coordinates: [],
    coordinateId: 1
  },
  getters: {
    markers: state => state.coordinates
  },
  mutations: {
    [ADD_COORDINATE](state, payload) {
      state.coordinates.push({
        id: state.coordinateId++,
        position: payload.position,
        radius: 5000,
        numOfSamples: 2
      });
    },
    [DELETE_COORDINATE](state, payload) {
      state.coordinates = state.coordinates.filter(
        coordinate => coordinate.id != payload.id
      );
    },
    [UPDATE_COORDINATE](state, payload) {
      const { id, radius, numOfSamples } = payload;
      state.coordinates = state.coordinates.map(coordinate => {
        if (coordinate.id == id) {
          return { ...coordinate, radius, numOfSamples };
        }
        return coordinate;
      });
    }
  },
  actions: {
    [ADD_COORDINATE]({ commit }, payload) {
      commit(ADD_COORDINATE, payload);
    },
    [DELETE_COORDINATE]({ commit }, payload) {
      commit(DELETE_COORDINATE, payload);
    },
    [UPDATE_COORDINATE]({ commit }, payload) {
      commit(UPDATE_COORDINATE, payload);
    }
  },
  modules: {}
});
