/**
 * Component.js
 * 参考: http://azu.github.io/slide/react-meetup/flux.html
 */

import React from "react";
import ActionCreator from "./ActionCreator";
import Store from "./Store";
import EventEmitter from "./EventEmitter";

// EventEmitterのインスタンスをそれぞれ渡す
var dispatcher = new EventEmitter();
var action = new ActionCreator(dispatcher);
var store = new Store(dispatcher);

export default class Component extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);
    this.state = {count: store.getCount()};
    // <--- Observe store's CHANGE（storeのCHANGEを監視する）
    // storeのCHANGEにイベントを登録する
    store.on("CHANGE", () => {
      this._onChange();
    });
  }

  // カウント数取得
  // storeのstateが変更されたら呼び出す処理
  // Comopnentのstateを書き換える
  _onChange() {
    this.setState({count: store.getCount()});
  }

  // カウントアップ処理を呼び出す
  countUp() {
    action.count(this.state.count + 1);
  }

  // カウントダウン処理を呼び出す
  countDown() {
    action.count(this.state.count - 1);
  }

  // レンダリング処理
  render() {
    return (
      <div>
        <h1>SimpleCount</h1>
        <button onClick={this.countUp.bind(this)}>Count Up</button>
        <button onClick={this.countDown.bind(this)}>Count Down</button>
        <p>
          Count: {this.state.count}
        </p>
      </div>
    );
  }
}
