function predictPicoPlaca() {
    var licensePlate = document.getElementById("licensePlate").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    const picoPlaca1 = new PicoPlaca(licensePlate, date, time);
    window.alert(picoPlaca1.getPicoPlaca());

}