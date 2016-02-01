$(document).ready(function () {
    jQuery('#clickme').on('click', function () {
        jQuery('#display').text("Hello worldlings!");
    });

    var url = 'http://pjc.gear.host/api/Hello';
    $.getJSON(url)
        .done(function (data) {
            //stuff
            $.each(data, function (key, item) {
                //more stuff
                $('<li>', { text: formatItem(item) }).appendTo($('#records'));
            });
        });

    function formatItem(item) {
        return item.helloID + ":" + item.helloLanguage + ":" + item.helloMessage + ".";
    }


    /*$.ajax({
        url: url,
        dataType: 'xml',
        timeout: 5000,
        success: function (data, status) {
            
        },
        error: function () {
            
        }
    });*/
});

/*function thisFunction() {
    document.getElementById('display').innerHTML = "Hello worldlings!";
    //.addEventListener('click', StartButtons, false);

    //document.getElementById('display').addEventListener('click', thisFunction, false);
}*/

/*function onDeviceReady() {
    document.getElementById('display').addEventListener('click', thisFunction, false);
}*/


//pjc.gear.host/api/Hello