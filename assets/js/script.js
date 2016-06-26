$(document).ready(function(){
    //File Upload
    $('#photo-upload').click(function() {
        console.log("asdasdads");
        $('input[type=file]').trigger('click');
    });
    
    //Form validation
    $("#contact-details").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            contactnumber: "required",
            address: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            contactnumber: "Please enter your contact number",
            address: "Please enter your address"
        }
    });
    
    
    $('form li').each(function(){
        $(this).addClass('hide-label');
    });  
    
    $('form li').find('input,textarea').on('keyup blur focus', function(e){
        var $parent = $(this).parent();
        var empty = false;
        
        if (e.type == 'keyup') {
            // keyup code here
            if( $(this).val() == '' ) {
                $parent.addClass('hide-label');
                empty = true;
                console.log(empty);
            } else {
                $parent.removeClass('hide-label');
                empty = false;
            }                    
        } 
        else if (e.type == 'blur') {
            // blur code here
        } 
        else if (e.type == 'focus') {
            // focus code here
        } 
        
        //Change CTA button to green
        if (!$('form li').hasClass('hide-label')) {
            $('#submit-form').removeClass('secondary-cta').addClass('primary-cta');            
        } else {
            $('#submit-form').removeClass('primary-cta').addClass('secondary-cta');            
        }
    });
});