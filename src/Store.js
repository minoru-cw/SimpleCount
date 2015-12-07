/**
 * Store.js
 * 参考: http://azu.github.io/slide/react-meetup/flux.html
 */

import Emitter from "./EventEmitter"
export default class Store extends Emitter { // 継承している!
  // コンストラクタ
  // EventEmitterのインスタンスを受け取る
  constructor(dispatcher) { // dispatcherを受け取る
    super();  // Emitterのコンストラクタを実行している?
    this.count = 0; // 変数宣言これでいいのかな...
    // <--- observe event.
    // dispatcherにcountイベントを登録する（Componentが呼び出す処理）
    dispatcher.on("count", this.onCount.bind(this));
  }

  // カウント数取得
  // get*は外部からstateを取り出すときのお約束?
  getCount() { // stateを取り出すメソッド
    return this.count;
  }

  // カウント?
  // stateを更新する（これが呼ばれないと更新されない）
  onCount(count) {
    // dispatcherがemitされると呼ばれる
    this.count = count;
    // emit "CHANGE" ---> self
    this.emit("CHANGE"); // Componentに自身の変更を伝える
  }
}
