huskylens.initI2c()
basic.forever(function () {
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isLearned(1)) {
            basic.showString("GR")
        } else if (huskylens.isLearned(2)) {
            basic.showString("GE")
        } else if (huskylens.isLearned(3)) {
            basic.showString("B")
        } else if (huskylens.isLearned(4)) {
            basic.showString("R")
        } else {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . #
                `)
        }
    }
})
