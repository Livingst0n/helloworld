$(document).ready(function () {
    jQuery('#clickme').on('click', function () {
        jQuery('#display').text("Hello worldlings!");
    });
});

/*function thisFunction() {
    document.getElementById('display').innerHTML = "Hello worldlings!";
    //.addEventListener('click', StartButtons, false);

    //document.getElementById('display').addEventListener('click', thisFunction, false);
}*/

/*function onDeviceReady() {
    document.getElementById('display').addEventListener('click', thisFunction, false);
}*/
