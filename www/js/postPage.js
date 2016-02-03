//var app = {
//    initialize: function() {
//        document.addEventListener('deviceready', this.onDeviceReady, false);
//    },

//    onDeviceReady: function () {
//        alert("hi");
//        var url = 'http://pjc.gear.host/api/Hello';
//    /*$.getJSON(url)
//        .done(function (data) {
//            //stuff
//            $.each(data, function (key, item) {
//                //more stuff
//                $('<li>', { text: formatItem(item) }).appendTo($('#records'));
//            });
//        });*/
//        $(document).ready(function () {
//            alert("hello");
//            var myLanguage = jQuery("#language").val();
//            var myMessage = jQuery("#message").val();

//            jQuery('#submitButton').on('click', function () {
//                console.log("boom");
//                $.post(url, { helloLanguage: myLanguage, helloMessage: myMessage })
//                    .done(function (data) {
//                        alert("Data Loaded: " + data);
//                    });
//                console.log("boom2");
//            });
//        });
        
        
        
        

//        /*$.ajax({
//            type: 'GET',
//            url: url,
//            dataType: 'json',
//            success: function (data, status) {
//                $.each(data, function (key, item) {
//                    $('<li>', { text: formatItem(item) }).appendTo($('#records'));
//                });
//            },
//            error: function () {
//                //error loading data
//            }
//        });*/

//        /*function formatItem(item) {
//            return item.helloID + ":" + item.helloLanguage + ":" + item.helloMessage + ".";
//        }*/
//    }
//};

///*$(document).ready(function () {
//    //$.support.cors = true;
//    //$.mobile.allowCrossDomainPages = true;
    
//});*/

//app.initialize();

jQuery(document).ready(function () {
    jQuery(document).ready(function () {
        var url = 'http://pjc.gear.host/api/DeleteHello/17';

        var myLanguage = jQuery("#language").val();
        var myMessage = jQuery("#message").val();

        jQuery('#submitButton').on('click', function () {
            /*$.post(url, { helloLanguage: myLanguage, helloMessage: myMessage })
                .done(function (data) {
                    alert("Data Loaded: " + data);
                });*/
            $.ajax({
                url: url,
                type: "DELETE",
                data: { helloLanguage: myLanguage, helloMessage: myMessage },
                success: function (data, textStatus, jqXHR) {
                    alert("success");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("failure: " + errorThrown + ":" + jqXHR[0] + ":" + textStatus);
                }
            });
        });
    });
});