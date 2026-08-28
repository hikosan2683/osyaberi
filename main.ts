function speakinit () {
    serial.redirect(
    SerialPin.P0,
    SerialPin.P1,
    BaudRate.BaudRate9600
    )
    basic.pause(1000)
    serial.writeLine("?")
}
