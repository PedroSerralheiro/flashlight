input.onButtonPressed(Button.A, function () {
    if (Ligado == 0) {
        Ligado = 1
    } else {
        Ligado = 0
    }
    pins.digitalWritePin(DigitalPin.P0, Ligado)
})
let val = 0
let Ligado = 0
led.enable(false)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1000)
    }
    for (let index = 0; index < 2; index++) {
        while (val < 1024) {
            val = val + 1
            pins.analogWritePin(AnalogPin.P1, val)
            basic.pause(1)
        }
        while (val > 0) {
            val = val - 1
            pins.analogWritePin(AnalogPin.P1, val)
            basic.pause(1)
        }
    }
})
