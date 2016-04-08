// 一个action会接收store作为第一个参数
// 因为我们只对事件的派遣（或者以及state）感兴趣，
// 所以我们可以把这两个参数通过es6的解构赋值方法传递进去
// 也就是store.dispatch()以及store.state
const incrementCounter = ({ dispatch, state }) => {
    dispatch('INCREMENT', 1)
}

const decrementCounter = ({ dispatch, state }) => {
    dispatch('DECREMENT', 1)
}

export { incrementCounter, decrementCounter }