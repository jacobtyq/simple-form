$(document).ready(function(){
    //Form validation
    $("#contact-details").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            contactnumber: "required",
            address: "required"
        },
        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
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
        
        //Change CTA button to green
        if (!$('form li').hasClass('hide-label')) {
            $('#submit-form').removeClass('secondary-cta').addClass('primary-cta');            
        } else {
            $('#submit-form').removeClass('primary-cta').addClass('secondary-cta');            
        }
    });
    
    $("#photo-form").validate({
        rules: {
            field: {
                required: true                   
            }
        },
        messages: {
            file: "You need to upload a photo"
        }
    });    
    
    //File Upload
    $('#photo-upload').click(function() {
        $('input[type=file]').trigger('click');
    });    

    //Photo Upload    
    var fileUploader = document.getElementById('file-uploader');
    fileUploader.addEventListener('change',displayImage, false);
    
    var canvas = document.getElementById('photo-canvas');
    var ctx = canvas.getContext('2d');     
    
    function displayImage(e){
        var reader = new FileReader();
        reader.onload = function(event){
            var img = new Image();
            img.onload = function(){
                canvas.width = 600;
                canvas.height = 260;
                ctx.drawImage(img,0,0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
        $('#photo-upload').hide();
        $('#photo-container').show();
        $('#submit-photo').removeClass('secondary-cta').addClass('primary-cta');                    
    }
});