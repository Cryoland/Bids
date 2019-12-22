function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//code of the SHA1 function
function SHA1(msg){function rotate_left(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;};function lsb_hex(val){var str='';var i;var vh;var vl;for(i=0;i<=6;i+=2){vh=(val>>>(i*4+4))&0x0f;vl=(val>>>(i*4))&0x0f;str+=vh.toString(16)+vl.toString(16);}
return str;};function cvt_hex(val){var str='';var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;};function Utf8Encode(string){string=string.replace(/\r\n/g,'\n');var utftext='';for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;};var blockstart;var i,j;var W=new Array(80);var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=new Array();for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j);}
switch(msg_len % 4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length % 16)!=14)word_array.push(0);word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
var temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();}

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


$(document).ready(function(){  
  
//  ---------- Левое меню --------------
  
  $(function() {

     var menu_ul = $('.menu-item-ul'),
         menu_a = $('.menu-item1 > a');         

         menu_ul.hide();       
         $('.act-ul').show();
    
         menu_a.click(function (e) {
           e.preventDefault();
           if (!$(this).hasClass('active-lm')) {
             menu_a.removeClass('active-lm');
             menu_ul.filter(':visible').slideUp('normal');
             $(this).addClass('active-lm').next().stop(true, true).slideDown('normal');
           } else {
             $(this).removeClass('active-lm');
             $(this).next().stop(true, true).slideUp('normal');
           }
         });
       
 });    


//  ---------- Слайдер каталог --------------  
      $('.m-news-list').bxSlider({              
              slideWidth:452,                           
              minSlides: 2,
              maxSlides: 2,              
              moveSlides: 1,
              pager: false,
              slideMargin: 20
             }); 
  
  
  
//  ---------- Слайдер галерея -------------- 

    $('.sl-gallary3-list').bxSlider({
              slideWidth: 230,//                            
              minSlides: 3,
              maxSlides: 3,              
              moveSlides: 1,
              slideMargin: 22,
              pager: false
             });          

    $(".fancy-img").fancybox({    
                    padding : 0,
                    margine : 0,
                   closeBtn : true,
                overlayShow: true
              });
     
     


//  ---------- Маск плагин --------------
           
      $(".kontakt-tel").mask("+7 ( 999 ) 999 - 99 - 99");    
      $(".main-form-tel").mask("+7 ( 999 ) 999 - 99 - 99");
      $(".callback-tel").mask("+7 ( 999 ) 999 - 99 - 99");
      $(".zamer-tel").mask("+7 ( 999 ) 999 - 99 - 99");
           

//  ---------- Кнопка наверх --------------
  
        $("#back-top").hide();
       
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 10) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
           
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });



//  ---------- Заказать звонок --------------

    $(".a_callback").fancybox({
                    modal:true,
                    padding : 0,
                    margine : 0,
                    wrapCSS : 'main-fs',
                   closeBtn : true,
                overlayShow: true
              });   
  
  $('.callback_form').submit(function() {  
    
        $('.callback_wrap').fadeOut("slow");
         $('#done_callback').fadeIn("slow"); 
                  
           $('.feedback-close').click(function() {              
              $('.done_callback').fadeIn("slow");
              $('#done_callback').fadeOut("slow");
          });
      
   	});
  

  //  ---------- Форма заказа--------------

    $(".a_bid").fancybox({
                    modal:true,
                    padding : 0,
                    margine : 0,
                    wrapCSS : 'main-fs',
                   closeBtn : true,
                overlayShow: true
              });   
  
  $('.bid_form').submit(function() {  
    
        $('.bid_wrap').fadeOut("slow");
         $('#done_bid').fadeIn("slow"); 
                  
           $('.feedback-close').click(function() {              
              $('.done_bid').fadeIn("slow");
              $('#done_bid').fadeOut("slow");
          });
      
   	});



//  ---------- Консультация на главной --------------

     $('.fr-cont').submit(function() {        
          
        dataObj = {};
        $($(this).serializeArray()).each(function(i, field){ dataObj[field.name] = field.value; });

        if(!validateEmail(dataObj["email"]))
        {
          $(this).find('[name="email"]').css({"outline": "1px red solid"});
          return;
        }
        else
        {
          $(this).find('[name="email"]').css({"outline": "none"});        
          $('.fr-cont').fadeOut("slow");

                $.ajax({
                    type: "POST",
                    url: "/ajax/new_bid.php", 
                    data: $('.fr-cont').serializeArray(),
                    beforeSend: function(xhr){},
                    error: function(qXHR, textStatus, errorThrow){
                      console.log(textStatus);
                    },
                    success: function(data, textStatus, jqXHR){
                      $('.done_fr-cont').fadeIn("slow"); 
                    }
                });

           $('.feedback-close').click(function() {           
              $('.fr-cont').trigger("reset").fadeIn("slow");
              $('.done_fr-cont').fadeOut("slow");
           }); 
        }          
      });

// -------------   Изменение формы -------------------
      $('.edit-bid').submit(function() {           
                $.ajax({
                    type: "POST",
                    url: "/ajax/edit_bid.php", 
                    data: $(this).serializeArray(),
                    beforeSend: function(xhr){},
                    error: function(qXHR, textStatus, errorThrow){
                      console.log(qXHR);
                    },
                    success: function(data, textStatus, jqXHR){
                      $('.edit-bid .btn1').addClass('bid-edited').text('Изменено');
                      setTimeout(() => {
                        $('.edit-bid .btn1').removeClass('bid-edited').text('Изменить');
                      }, 1500);
                    }
                });
        });


// --------- Авторизация ----------------
      $('.auth-cont').submit(function() {  
          login = $(this).find('[name="login"]').val();
          pass = $(this).find('[name="password"]').val();
          if(login !=="" && pass !=="")
          {
            $.ajax({
              type: "POST",
              url: "/ajax/login.php", 
              data: {'login':login, 'password':SHA1(pass)},
              beforeSend: function(xhr){},
              error: function(qXHR, textStatus, errorThrow){
                $("#status").val("Ошибка");
              },
              success: function(data, textStatus, jqXHR){
                console.log(data);
                var params = getUrlVars();
                window.location = window.location.origin+params["back"];
              }
            });
          }


        $(this).find('[name="password"]').val(SHA1($(this).find('[name="password"]').val()));
        

      });
  
//  ---------- Консультация на главной --------------

     $('.m-form').submit(function() {        
          
          $('.main_page_form').fadeOut("slow");
          $('.main-form-info').fadeOut("slow"); 
          $('.done_main_form').fadeIn("slow"); 
          
                  
           $('.feedback-close').click(function() {              
              $('.main_page_form').fadeIn("slow");
              $('.main-form-info').fadeIn("slow"); 
              $('.done_main_form').fadeOut("slow");
          });           
      });



//  ---------- Закрытие fancybox  --------------
    $(function() {
        $("body").on("click", ".fancybox-close", function() {
            $.fancybox.close()
        });
        $("body").on("click", ".bClose", function() {
            $.fancybox.close()
        });       
    });

  









  

});//  ---------- Закрытие -------------- 

 


















