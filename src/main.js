import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import './unit/const';
import './control';
import { subscribeRecord } from './unit';
subscribeRecord(store); // 将更新的状态记录到localStorage

// 从云端获取历史最高分（不再从 localStorage 读取）
const initMaxFromCloud = () => {
  if (window.GamePlatform && typeof window.GamePlatform.getMyScores === 'function') {
    window.GamePlatform.getMyScores('tetris', 200).then(items => {
      if (items && items.length > 0) {
        const best = Math.max(...items.map(it => it.score));
        store.commit('max', best);
      }
    }).catch(() => {});
  }
};
initMaxFromCloud();

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(App),
  store: store
})
