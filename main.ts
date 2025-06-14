input.onLogoEvent(TouchButtonEvent.Released, function () {
    Onda += 1
    if (Onda > 4) {
        Onda = 0
    }
})
input.onButtonPressed(Button.A, function () {
    Probabilidad_de_salto += -1
    if (Probabilidad_de_salto < 0) {
        Probabilidad_de_salto = 0
    }
})
function LecturaPromedio (núm: number) {
    Suma = 0
    for (let index = 0; index < 8; index++) {
        Suma += pins.analogReadPin(núm)
    }
    return Suma / 8
}
function Tocar (Notas: number) {
    music.stopAllSounds()
    indicenota = Math.map(Notas, 0, 1023, listadetonos.length, 0)
    if (Onda == 0) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        listadetonos[indicenota],
        listadetonos[indicenota],
        255,
        0,
        randint(100, 1500),
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    } else if (Onda == 1) {
        music.play(music.createSoundExpression(
        WaveShape.Triangle,
        listadetonos[indicenota],
        listadetonos[indicenota],
        255,
        0,
        randint(100, 1500),
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    } else if (Onda == 2) {
        music.play(music.createSoundExpression(
        WaveShape.Sawtooth,
        listadetonos[indicenota],
        listadetonos[indicenota],
        255,
        0,
        randint(100, 1500),
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    } else if (Onda == 3) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        listadetonos[indicenota],
        listadetonos[indicenota],
        255,
        0,
        randint(100, 1500),
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    } else if (Onda == 4) {
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        listadetonos[indicenota],
        listadetonos[indicenota],
        255,
        0,
        randint(100, 1500),
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    }
}
input.onButtonPressed(Button.B, function () {
    Probabilidad_de_salto += 1
    if (Probabilidad_de_salto > 9) {
        Probabilidad_de_salto = 9
    }
})
let indicenota = 0
let Suma = 0
let Onda = 0
let foo = 0
let listadetonos: number[] = []
let Probabilidad_de_salto = 0
Probabilidad_de_salto = 0
led.enable(false)
music.setTempo(120)
pins.setPull(DigitalPin.P6, PinPullMode.PullDown)
let lista = [AnalogPin.P1, AnalogPin.P2, AnalogPin.P3]
listadetonos = [
131,
147,
156,
175,
196,
208,
233,
262,
294,
311,
349,
392,
415,
466,
523,
587,
0,
698,
784,
831,
932
]
while (true) {
    for (let value of lista) {
        foo = pins.analogReadPin(value)
        while (pins.digitalReadPin(DigitalPin.P6) == 1) {
        	
        }
        if (Probabilidad_de_salto < randint(1, 10)) {
            Tocar(pins.analogReadPin(value))
        }
        while (pins.digitalReadPin(DigitalPin.P6) == 0) {
        	
        }
    }
}
