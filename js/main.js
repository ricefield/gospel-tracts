    $(document).ready(function() {
        $("#headline").prepend('<a href="../../"><i class="fa fa-chevron-left"></i>&nbsp;&nbsp;')
    });

    $("p").click(function() {
        $(this).toggleClass("highlight");
    });