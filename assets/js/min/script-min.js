$(document).ready(function(){function e(e){var a=new FileReader;a.onload=function(e){var a=new Image;a.onload=function(){t.width=600,t.height=260,r.drawImage(a,0,0)},a.src=e.target.result},a.readAsDataURL(e.target.files[0]),$("#photo-upload").hide(),$("#photo-container").show(),$("#submit-photo").removeClass("secondary-cta").addClass("primary-cta")}$("#contact-details").validate({rules:{firstname:"required",lastname:"required",contactnumber:"required",address:"required"},messages:{firstname:"Please enter your first name",lastname:"Please enter your last name",contactnumber:"Please enter your contact number",address:"Please enter your address"}}),$("form li").each(function(){$(this).addClass("hide-label")}),$("form li").find("input,textarea").on("keyup blur focus",function(e){var a=$(this).parent(),t=!1;"keyup"==e.type&&(""==$(this).val()?(a.addClass("hide-label"),t=!0,console.log(t)):(a.removeClass("hide-label"),t=!1)),$("form li").hasClass("hide-label")?$("#submit-form").removeClass("primary-cta").addClass("secondary-cta"):$("#submit-form").removeClass("secondary-cta").addClass("primary-cta")}),$("#photo-form").validate({rules:{field:{required:!0}},messages:{file:"You need to upload a photo"}}),$("#photo-upload").click(function(){$("input[type=file]").trigger("click")});var a=document.getElementById("file-uploader");a.addEventListener("change",e,!1);var t=document.getElementById("photo-canvas"),r=t.getContext("2d")});