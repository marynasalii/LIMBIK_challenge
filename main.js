// (function () {
$('.ui.form')
    .form({
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
    // , 
    // {
    //     on: 'blur',
    //     inline: true,
    //     onSuccess: function () {
    //         // event.preventDefault();
    //         $('.form').addClass('hidden');
    //         $('.positive').removeClass('hidden');
    //         alert('Success');
    //         // return false; // false is required if you do don't want to let it submit

    //     },
    //     onFailure: function () {
    //         alert('Failure');
    //         return false; // false is required if you do don't want to let it submit                                            
    //     }
    // }
    ).submit(function (e) {
        e.preventDefault();
        if ($('.ui.form').form('is valid')) {
            $('.ui.form').hide();
            $('.positive').removeClass('hidden');
        }
    });





