function right () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M1B,
    speed
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speed,
    robotbit.Motors.M2B,
    speed
    )
}
function backword () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed_2,
    robotbit.Motors.M1B,
    speed_2
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speed_2,
    robotbit.Motors.M2B,
    speed_2
    )
}
function left () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M1B,
    speed
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speed,
    robotbit.Motors.M2B,
    speed
    )
}
function forward () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    speed,
    robotbit.Motors.M1B,
    speed
    )
    robotbit.MotorRunDual(
    robotbit.Motors.M2A,
    speed,
    robotbit.Motors.M2B,
    speed
    )
}
let speed_2 = 0
let speed = 0
basic.showIcon(IconNames.Happy)
speed = 200
speed_2 = -200
basic.forever(function () {
    forward()
})
