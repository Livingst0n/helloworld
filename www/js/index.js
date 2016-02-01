var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        /*var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');*/

        /*listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');*/

        /*$.getJSON('http://reddit.com/.json', function(data){
            alert('Success - got ' + data.data.children.length + ' children in JSON');
        });*/
        
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
    }
};

/*$(document).ready(function () {
    //$.support.cors = true;
    //$.mobile.allowCrossDomainPages = true;
    
});*/

app.initialize();