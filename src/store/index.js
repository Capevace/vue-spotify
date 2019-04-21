import Vue from 'vue';
import Vuex from 'vuex';
import vuexPersistedstate from 'vuex-persistedstate';

import app from './modules/app';
import auth from './modules/auth';
import user from './modules/user';
import search from './modules/search';
import player from './modules/player';
import library from './modules/library';
import playlist from './modules/playlist';
import notification from './modules/notification';

import spotifyApiPlugin from '@/api/spotify/plugin';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const persistedState = vuexPersistedstate({
  key: 'spotify_app_state',
  reducer: state => ({
    auth: state.auth
  })
});

const store = new Vuex.Store({
  modules: {
    app,
    auth,
    user,
    search,
    player,
    library,
    playlist,
    notification
  },
  plugins: [spotifyApiPlugin, persistedState],
  strict: debug
});

window.store = store;

export default store;
