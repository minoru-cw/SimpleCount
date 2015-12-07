/**
 * ActionCreator.js
 * 参考: http://azu.github.io/slide/react-meetup/flux.html
 */

export default class ActionCreator {
  // コンストラクタ
  // EventEmitterのインスタンスを受け取る
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  // カウント
  // "Emit" event ---> Store
  count(data) {
    this.dispatcher.emit("count", data);
  }
}
