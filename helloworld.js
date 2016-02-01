$(document).ready(function () {
    //$.support.cors = true;
    //$.mobile.allowCrossDomainPages = true;
    jQuery('#clickme').on('click', function () {
        jQuery('#display').text("Hello worldlings!");
    });

    var url = 'http://pjc.gear.host/api/Hello';
    /*$.getJSON(url)
        .done(function (data) {
            //stuff
            $.each(data, function (key, item) {
                //more stuff
                $('<li>', { text: formatItem(item) }).appendTo($('#records'));
            });
        });*/

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data, status) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem(item) }).appendTo($('#records'));
            });
        },
        error: function () {
            //error loading data
        }
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