basic.forever(function () {
    if (0 == Math.round(input.lightLevel() / 50)) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (1 == Math.round(input.lightLevel() / 50)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (2 == Math.round(input.lightLevel() / 50)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (3 == Math.round(input.lightLevel() / 50)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
    } else if (4 == Math.round(input.lightLevel() / 50)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
