       </div>
   </div>
   
   <!--------------- Заказать завонок -------------->

   <div style="display:none;">			
  <div id="id_callback" class="">
   <h2>Заказать звонок</h2>
     <form action="" name="callback" class="callback_form" onsubmit="return false;">
        <div class="callback_wrap">
          
          <label>Ваше имя: <br>           
            <input type="text" name="callback-name" placeholder="Например, Сергей">
          </label>        
          
          <label>Ваш телефон <span>*</span> <br>
            <input type="text" name="callback-tel" class="callback-tel reqv-tel" placeholder="+7 ( ___ ) __ - __ - __">
          </label>  
              
          <button type="submit" class="btn1">Отправить</button>
                  
         <a href="" class="fancybox-close bClose"            
         onclick="$.fancybox(this);return false;"></a>            
         </div>
         
         <!-------- Ответ ------->
         <div style="display:none;" id="done_callback">           
             <p>Спасибо! Ваш запрос принят.
                Мы свяжемся с Вами
                в ближайшее время.</p>
             <a href="" class="fancybox-close bClose"
              onclick="$.fancybox(this);return false;"></a>

         </div>

     </form>
  </div>
  </div>

<footer class="foot1">
          
          <div class="footer1 container clearfix">
              
            <div class="foot-cont1">
              <span class="ft-h">Заголовок списка:</span>
              <ul>
                <li><a href="/">вариант 1</a></li>
                <li><a href="/">вариант 2</a></li>
                <li><a href="/">вариант 3</a></li>
                <li><a href="/">вариант 4</a></li>
                <li><a href="/">вариант 5</a></li>
                <li><a href="/">вариант 6</a></li>
              </ul>         
            </div>       
    
            <div class="foot-contact">
             
              <div class="ft-contact1">
                <p>123456, г. Москва,<br> 
                   Варшавское шоссе, дом № 1111, стр. 11</p>
              </div>
              <div class="ft-contact2">
                <a href="/tel:+79999999999"> +7 (999) <span>999-99-99</span>;</a>
                <a href="/tel:+79999999999"> +7 (999) <span>999-99-99</span></a>
              </div>
              <div class="ft-contact3">
                <a href="mailto:info@domain.ru">info@domain.ru</a>  
              </div>
             
            </div>
            
            <div class="foot-btn">
              <a href="#id_callback" class="btn1 a_callback">Заказать звонок</a>
              <div class="ft-logo"> 
                <a href="/"></a>
                <p>brand byline</p> 
              </div>    
              
            </div>
          </div>    
     
        </footer> 
       
         
      <footer class="foot2">          
          <div class="footer2 container clearfix">
             <p class="sitemap">© 2010-2020 ООО "Brand", <a href="/">Карта сайта</a> </p>
             <p class="razrab">Разработка сайта — someDevCompany</p>
             <a href="" class="ft-arrow"></a>
          </div>
      </footer> 

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
    <script src="<?=attach_file(DEFAULT_JS_PATH)?>"></script>   
    <script type="text/javascript" src="<?=attach_file(JS_FOLDER."/plugins.js")?>"></script>
    <script type="text/javascript" src="<?=attach_file(JS_FOLDER."/jquery.fancybox.js")?>"></script>
    <!-- bxSlider Javascript file -->
    <script type="text/javascript" src="<?=attach_file(JS_FOLDER."/jquery.bxslider/jquery.bxslider.js")?>"></script>
</body>    
<?if(defined("PROLOG_INCLUDED") && PROLOG_INCLUDED===true) include_once($_SERVER["DOCUMENT_ROOT"]."/core/epilog.php");?>