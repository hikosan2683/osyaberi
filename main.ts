// ① メニューに出すグループの名前（好きな名前でOK）と色を設定するおまじない
// % color="#007ACC" icon="\uf0a1"
namespace 話すロボット {

    // ② 関数の前に「export」を付け、上に「//% block」と書くのがブロックにするおまじない
    //% block="話す準備をする"
    export function speakinit () {
        serial.redirect(
        SerialPin.P0,
        SerialPin.P1,
        BaudRate.BaudRate9600
        )
        basic.pause(1000)
        serial.writeLine("?")
    }
    // ★★★文字を送る ★★★
    //% block="%text と話す"
    export function speakText (text: string) {
                // ★文字を送る前に自動で初期化！
        serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
        basic.pause(1000)
        serial.writeLine(text) // 入力された文字をそのまま相手に送る
    }

}
