// (function () {
    $('.main.ui form')
        .form({
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
                        prompt : 'Please enter a valid e-mail'
                    }
                ]
            },
        }, {
            on: 'blur',
            inline: true,
            onSuccess: function (event) {
                // event.preventDefault();
                alert('Success');
                return false; // false is required if you do don't want to let it submit

            },
            onFailure: function () {
                alert('Failure');
                return false; // false is required if you do don't want to let it submit                                            
            }
        });
// });






// function simulateAJAXRequest() {
//     $(".limbik-form").addClass("loading");

// }

// $(".limbik-submit").click(simulateAJAXRequest);