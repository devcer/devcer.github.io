$(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });
$(".form_datetime").datetimepicker({
            format: "dd MM yyyy - hh:ii"
        });
    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
    
    var bike=[
        {
            "model":"Bajaj"
        },
        {
            "model":"Hero"
        },
        {
            "model":"Hero Honda"
        },
        {
            "model":"Honda"
        },
        {
            "model":"KTM"
        },
        {
            "model":"Mahindra"
        },
        {
            "model":"Royal Enfield"
        },
        {
            "model":"Suzuki"
        },
        {
            "model":"TVS"
        },
        {
            "model":"Vespa"
        },
        {
            "model":"Yamaha"
        },

    ];
       

    for(var i=0;i<bike.length;i++){
        $("#modelName").append("<option value="+i+">"+bike[i].model+"</option>");
    }
    for (var i = 2015; i >= 1996; i--) {
        $("#modelNumber").append("<option value="+i+">"+i+"</option>");
    }
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

          
