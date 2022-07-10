function predictPicoPlaca() {
    var licensePlate = document.getElementById("licensePlate").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    const picoPlaca1 = new PicoPlaca(licensePlate, date, time);

    if ((licensePlate != "" && date != "" && time != "")) {
        if (picoPlaca1.getPicoPlaca() === false) {
            window.alert("Feel free to go, you can be on the road");
        } else {
            window.alert("You can not be on the road" + "\n" + "Your car has Pico & Placa! ");
        }

    } else if (licensePlate === "" || date === "" || time === "") {
        window.alert("Please fill out all the fields");
    }

}