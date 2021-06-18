//npm install redux
//不能通过es6方式导入redux

/* 
react包括props和state
props意味着父级分布下来的属性
state意味着组件内部可以自行管理的状态，并且react没有数据向上回溯的能力， 单行数据流

这意味着如果是一个数据状态非常复杂的应用， 更多的时候发现react无法让两个组件互相交流， 使用对方的数据，非常麻烦，这个时候需要react
把所有state集中到组件顶部， 能够灵活的将所有的state各取所需的分布给所有的组件

redux可以为react应用提供可预测的状态管理
redux会将整个应用状态存储到一个地方， 称为store，这个store里面保存了一个状态树
改变state的唯一方法是通过调用store的dispatch方法触发action
组件派发的行为是给store的而不是直接通知其他组件
其他组件可以通过订阅store中的状态来刷新自己的视图。
*/
/* 

使用步骤
 1.创建reducer
 2.创建action
 3.创建store

*/

/* 
注意：node中对ES6模块化的支持
p 目前我使用的node版本是v12.16.1，从node v13.2.0开始，node才对ES6模块化提供了支持：
 p node v13.2.0之前，需要进行如下操作：
    在package.json中添加属性： "type": "module"； ü 在执行命令中添加如下选项：node --experimental-modules src/index.js; 
p node v13.2.0之后，只需要进行如下操作：
    在package.json中添加属性： "type": "module"； p 注意：导入文件时，需要跟上.js后缀名；
*/
//目前使用的是node导出ss
import redux from 'redux';


const initialState = {
  counter: 0
}

//action 类型 参数
const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };

const action3 = { type: "ADD_NUMBER", num: 5 };
const action4 = { type: "SUB_NUMBER", num: 12 };

//reducer纯函数 state = initialState,初始化数据
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
    default:
      return state;
  }
}

//store
// store(创建的时候需要传入一个reducer)
const store = redux.createStore(reducer)

// 订阅store的修改
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})

// 派发action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action3);
store.dispatch(action4);