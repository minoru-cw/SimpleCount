/**
 * EventEmitter.js
 * 参考: http://azu.github.io/slide/react-meetup/flux.html
 * 呼び出され方を見た感じシングルトンだと思う
 */

export default class EventEmitter {
  // コンストラクタ
  constructor() {
    this._handlers = {};
  }

  // イベントの登録
  on(type, handler) {
    if (typeof this._handlers[type] === 'undefined') {
      this._handlers[type] = [];
    }
    this._handlers[type].push(handler);
  }

  // イベントの処理
  // 登録されているイベントを1回呼び出す(なるほどfor文かぁ)
  emit(type, data) {
    var handlers = this._handlers[type] || [];
    for (var i = 0; i < handlers.length; i++) {
      var handler = handlers[i];
      handler.call(this, data);
    }
  }
}

/**
 * Dictionary
 *
 * イベントリスナ:
 *  ひとつのイベントに対して複数の処理を結びつける仕組み。
 *  イベントハンドラと区別できるが同じとみなしても問題なさそう。
 */
