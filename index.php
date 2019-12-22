<?require_once($_SERVER["DOCUMENT_ROOT"]."/main/header.php");?>

   <div class="container inner"> 
     <div class="cont-form clearfix">
       <form action="#" name="#" class="fr-cont" onsubmit="return false;">
          <div class="cont-form-l">
            <label>Фамилия:
              <input type="text" name="lname" placeholder="Фамилия">
            </label>
            <label>Имя:
              <input type="text" name="fname" placeholder="Имя">
            </label>
            <label>Отчество:
              <input type="text" name="sname" placeholder="Отчество">
            </label>
          </div>   
          <div class="cont-form-l">
            <label>Телефон:
              <input type="text" name="phone" placeholder="+7 ( ___ ) __ - __ - __">
            </label>
            <label>Ваш e-mail: <span>*</span>:
              <input type="text" name="email" required="" placeholder="pochta@me.com">
            </label>
            <label>Адрес:
              <input type="text" name="address" placeholder="pochta@me.com">
            </label>
          </div>          
          <div class="cont-form-r">
            <label>Ваше сообщение :
              <textarea type="text" name="comment" placeholder="Напишите Ваше сообщение"></textarea>
            </label>
          </div>
          <div class="cont-form-bot">
            <button class="btn1 clearfix" type="submit">Отправить</button>          
            <input type="reset" value="Сбросить форму">
          </div>
        </form>

        <!-------- Ответ ------->

        <div class="done_fr-cont">
          <h2>Ваша заявка принята.</h2>
          <p>Наш менеджер свяжется с Вами в ближайшее время</p>
          <button class="feedback-close btn1">ОБНОВИТЬ ФОРМУ</button>
        </div>
     </div>
   </div>              
  </div>   

<?require_once($_SERVER["DOCUMENT_ROOT"]."/main/footer.php");?>