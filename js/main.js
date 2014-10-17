    $(document).ready(function() {
        $("#headline").prepend('<a href="../../"><i class="fa fa-chevron-left pull-left"></i></a>')
    });

    $("p").click(function() {
        $(this).toggleClass("highlight");
    });