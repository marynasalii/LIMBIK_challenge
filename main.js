$('.ui.form')
    .form({
        inline: true,
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'This is a required field'
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'This is a required field'
                    },
                    {
                        type: 'email',
                        prompt: 'Please enter a valid e-mail'
                    }
                ]
            },
        }
    }
    ).submit(function (e) {
        e.preventDefault();
        $('.ui.form input').prop('disabled', true);
        $('.ui.form select').prop('disabled', true);
        $('.submit').addClass("loading");
        setTimeout(
            function () {
                $('.submit').removeClass("loading");
                $('.ui.form input').prop('disabled', false);
                $('.ui.form select').prop('disabled', false);
            }, 3000)

        setTimeout(
            function () {
                if ($('.ui.form').form('is valid')) {
                    console.log($('.ui.form').form('get values'));
                    $('.ui.form').hide();
                    $('.positive').show();
                }
            }, 5000) // spinner dissapears after loading state ends (3 sec)                    
    });              // but success response is still in timeout (5 sec)





