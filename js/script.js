$(document).ready(function(){
    $('#star').raty({ half: true });
    
    $("#btn").on('click',function(){ 
        $(".login").fadeOut(2000, function(){
           $(".register").fadeIn(2000)}); 
        });
    
    $(document).one('click','button[name="send"]',function(event){
        var comment = $("textarea[name='comment']").val();
        var commen = $("input[name='commen']").val();
        event.preventDefault();
        $('<strong>'+ commen + '</strong><hr>').appendTo('.text-com');
        $('<p>'+ comment + '</p><hr>').appendTo('.text-com');
        $("#com")[0].reset();
        
    }); 
});
 
 $(function(){
        var field = new Array("login", "password");   
        $("form.login").submit(function() {    
            var error=0; 
            $(".login").find(":input").each(function() {
                for(var i=0;i<field.length;i++){ 
                    if($(this).attr("name")==field[i]){ 
                        if(!$(this).val()){
                            $(this).css('border', 'red 1px solid');
                            error=1;                                   
                        }
                        else{
                            $(this).css('border', 'gray 1px solid');
                        }  
                    }               
                }
           })
           
            if(error==0){ 
                return true;
            }
            else{
            if(error==1) var err_text = "Не все обязательные поля заполнены!";
            $("#messenger").html(err_text).css('color','red').css('margin-left','10px'); 
            $("#messenger").fadeIn("slow"); 
            return false; 
            }      
        })
    });
$(function(){
        var fiel = new Array("login", "password", "email", "name", "lastname");   
        $(".register").submit(function() {    
            var erro=0; 
            $(".register").find(":input").each(function() {
                for(var i=0;i<fiel.length;i++){ 
                    if($(this).attr("name")==fiel[i]){ 
                        if(!$(this).val()){
                            $(this).css('border', 'red 1px solid');
                            erro=1;                                   
                        }
                        else{
                            $(this).css('border', 'gray 1px solid');
                        }  
                    }               
                }
           })
           
            if(erro==0){ 
                return true;
            }
            else{
            if(erro==1) var err_text = "Не все обязательные поля заполнены!";
            $("#messenge").html(err_text).css('color','red').css('margin-left','10px'); 
            $("#messenge").fadeIn("slow"); 
            return false; 
            }
        })
                    
    });
    