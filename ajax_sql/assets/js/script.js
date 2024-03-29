/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/

// $(function () {
//     $(".box-hidden").slice(0, 4).show();
//     $("#loadMore").on('click', function (e) {
//         e.preventDefault();
//         $("div:hidden").slice(0, 4).slideDown();
//         if ($("div:hidden").length == 0) {
//             $("#load").fadeOut('slow');
//         }
//         $('html,body').animate({
//             scrollTop: $(this).offset().top
//         }, 1500);
//     });
// });
//
// $('a[href=#top]').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });
//
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });

$(document).ready(function () {

    $("#load-more").on('click',function (event) {
        event.preventDefault();

        var params = {};
        params.current = $(".album-list").children('.col-md-4').length;

        params.limit = 3;

        console.log(params);

        $.ajax({
            url:"http://localhost/appAjax/ajax_sql/ajax.php",
            data: params,
            type:"POST",
            dataType:"json",
            beforeSend:function () {
                alert("Trước khi gửi request bằng ajax");
            },
            success:function (data) {
                alert("ajax trả về thành công");
                console.log(data);
                $(".album-list").append(data.html);
            },
            error:function (xhr) {
                alert("Lỗi ajax");
            },
            complete:function (xhr,status) {
                alert("ajax hoàn tất");
            }
        });
    });
});