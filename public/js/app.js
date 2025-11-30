$(document).ready(function() {
    $(".num-order").change(function() {
    var id=$(this).attr('data');
    var qty = $(this).val();
    var url='modules/cart/update_ajax.php';
    // alert(id);
    //http://localhost/unitop.vn/back-end/php/lesson/section-18/shoping-cart2/?mod=cart&act=update_ajax
    // ?mod=cart&act=update_ajax
    // modules/cart/update_ajax.php
    var data={id:id,qty:qty};
    $.ajax({
        url: url,
        method:'POST',
        data: data,
        dataType: 'json',
        success:function(data){
            //  alert("Tra ve du lieu san san");
            alert(data);
            // console.log(data);
            
        },
        error:function(xhr,ajaxOptions,thrownError){
            alert(xhr.status);
            alert(thrownError);
        }
    });
});
});