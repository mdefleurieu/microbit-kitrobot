let ultra = 0
servos.P0.run(0)
basic.forever(function () {
    ultra = grove.measureInCentimeters(DigitalPin.P2)
    if (ultra <= 15) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        servos.P0.run(24)
        servos.P1.run(-24)
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        servos.P0.run(-24)
        servos.P1.run(24)
        basic.pause(1000)
    }
    servos.P0.stop()
    servos.P1.stop()
    ultra = 0
})
