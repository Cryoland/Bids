<?require_once($_SERVER["DOCUMENT_ROOT"]."/main/header.php");?>
  <div class="container inner"> 
   <div class="cont-form clearfix">

   	<form action="#" name="#" class="auth-cont" onsubmit="return false;">
          <div class="cont-form-l">
          	<span id="status">manager : manager</span>
            <label>Логин:
              <input type="text" name="login"/>
            </label>
            <label>Пароль:
              <input type="password" name="password" autocomplete="on"/>
            </label>
	        <div class="cont-form-bot">
	            <button class="btn1 clearfix" type="submit">Вход</button>
	        </div>
          </div>
    </form>

   </div>              
  </div> 
<?require_once($_SERVER["DOCUMENT_ROOT"]."/main/footer.php");?>