// (function () {
$('.form')
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
    }, {
        on: 'blur',
        // inline: true,
        onSuccess: function () {
            // event.preventDefault();
            alert('Success');
            return false; // false is required if you do don't want to let it submit

        },
        onFailure: function () {
            alert('Failure');
            return false; // false is required if you do don't want to let it submit                                            
        }
    });
    
//     .submit(function(e) {
//     e.preventDefault();
// });

