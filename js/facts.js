 $(document).ready(function() {

        init_multifield(10, '.input_fields_wrap', '.add_field_button', 'user_music[]');
        init_multifield(10, '.input_fields_wrap2', '.add_field_button2', 'user_music2[]');


        function init_multifield(max, wrap, butt, fname_p) {
            var max_fields = max; //maximum input boxes allowed
            var wrapper = $(wrap); //Fields wrapper
            var add_button = $(butt); //Add button class
            var fname = fname_p;

            var x = 1; //initlal text box count
            $(add_button).click(function (e) { //on add input button click
                e.preventDefault();
                if (x < max_fields) { //max input box allowed
                    x++; //text box increment
                    var cstring = '$(wrapper).append(\'<div><input class="fields" type="text" placeholder="Facts" name=' + fname + '><a href="#" class="remove_field" >Remove</a></div>\');' //add input box
                    eval(cstring);
                }
            });

            $(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
            })
        }
    });
