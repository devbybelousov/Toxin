$('.select').on('click', function () {
    if (!$(this).hasClass("active")){
        $(this).addClass("active");
        let count = 0;
        $('.select__items').slideDown(450);
        $('.item__number').each(function () {
            count += parseInt($(this).html());
        })
        if (count === 0) $('#clear').addClass("-disabled-");
    }else{
        $(this).removeClass("active");
        $('.select__items').slideUp(450)
    }
});



$('.item__plus').on('click', function () {
    let data_item = $(this).data('item');
    let count = 0;
    let number = $('div[data-item="'+ data_item +'"][class="item__number"]');
    number.html(parseInt(number.html()) + 1);
    if (parseInt(number.html()) > 0) $('img[data-item="'+ data_item +'"][class="item__minus"]').addClass("active");
    $('.item__number').each(function () {
        count += parseInt($(this).html());
    })
    if (count > 0) $('#clear').removeClass("-disabled-");
});


 $('.item__minus').on('click', function () {
     if ($(this).hasClass("active")){
         let data_item = $(this).data('item');
         let count = 0;
         let number = $('div[data-item="'+ data_item +'"][class="item__number"]');
         number.html(parseInt(number.html()) - 1);
         if (parseInt(number.html()) === 0) $(this).removeClass("active");
         $('.item__number').each(function () {
             count += parseInt($(this).html());
         })
         if (count === 0) $('#clear').addClass("-disabled-");
     }
});

 $('#clear').on('click', function () {
     if (!$(this).hasClass('-disabled-')){
         $('.item__number').each(function () {
             $(this).html("0");

         });
         $('.item__minus').each(function () {
             $('.item__minus').removeClass("active");
         });
         $(this).addClass("-disabled-");
         $('.select').html("Сколько гостей");
     }
 });

 $('#apply').on('click', function () {
     let count = 0;
     let text;
     $('.item__number').each(function () {
         count += parseInt($(this).html());
     })
     if (count === 0) {
         text = "Сколько гостей";
     }else if (count === 1 && count <= 10){
         text = count + " гость";
     }else if(count  >= 2 && count <= 4 && count <= 10) {
         text = count + " гостя";
     }else if (count % 10 === 1 && count >= 20 && count <= 10){
         text = count + " гость";
     }else if(count % 10 >= 2 && count % 10 <= 4 && count >= 20){
         text = count + " гостя";
     }else if((count % 10 > 4 || count% 10 === 0)  || count > 4){
         text = count + " гостей";
     }

     $('.select').html(text);
 });
