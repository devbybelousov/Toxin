$('.like').on("click", function () {
    if ($(this).hasClass('-active-')){
        $(this).removeClass('-active-');
        $(this).find('.like__heart').addClass('-disabled-');
        $(this).find('.like__heart').removeClass('-enabled-');

        $(this).find('.like__amount').html(parseInt($(this).find('.like__amount').html()) - 1)
    }else{
        $(this).addClass('-active-');
        $(this).find('.like__heart').addClass('-enabled-');
        $(this).find('.like__heart').removeClass('-disabled-');

        $(this).find('.like__amount').html(parseInt($(this).find('.like__amount').html()) + 1)
    }
})