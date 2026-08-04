import event from '../../unit/event'
import states from '../states'
const down = store => {
  store.commit('key_reset', true)
  if (store.state.lock) {
    return
  }
  if (store.state.cur !== null) {
    console.log('[tetris] R key pressed while game active, calling overStart(true), points:', store.state.points)
    event.down({
      key: 'r',
      once: true,
      callback: () => {
        console.log('[tetris] R key callback fired, calling overStart(true), points:', store.state.points)
        states.overStart(true)
      }
    })
  } else {
    console.log('[tetris] R key pressed while no game active, calling start()')
    event.down({
      key: 'r',
      once: true,
      callback: () => {
        if (store.state.lock) {
          return
        }
        states.start()
      }
    })
  }
}

const up = store => {
  store.commit('key_reset', false)
  event.up({
    key: 'r'
  })
}

export default {
  down,
  up
}
