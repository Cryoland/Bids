<?require_once($_SERVER["DOCUMENT_ROOT"]."/main/header.php");
if(isset($_GET['logout'])) unset($_SESSION['loggedin']);
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) header("Location:http://".$_SERVER["SERVER_NAME"]."/auth/?back=".strtok($_SERVER["REQUEST_URI"],'?'));
?>



  <div class="container inner"> 
		   	<div class=inner-menu">   	
			   	<div><b>ManagerId: <?=$_SESSION['userid']?></b></div>
				<a href="?logout">Выйти</a>
		   	</div>
		   	<div class="inner-left">
		   		<?if(isset($_GET['bid']) && $_GET['bid'] > 0):?>
					<?
						$data = escape_params($_GET);
			   			$request = mysql_query("SELECT * FROM `bids` WHERE `id`=".$data['bid']);
					?>
					<?if(mysql_num_rows($request)==0):?>
						<b>Не найдено</b>
					<?
						else:
						$result = mysql_fetch_array($request, MYSQL_ASSOC);
					?>
						<div>
							<a href="<?=strtok($_SERVER['REQUEST_URI'],'?')?>">Назад</a>
						</div>
				   		<div class="cont-form clearfix"  style="height: 500px;" >
							<form action="#" name="#" class="edit-bid" onsubmit="return false;">
					          <div class="cont-form-l">
					          	<input type="hidden" name="id" value="<?=$result['id']?>">
					            <label>Фамилия:
					              <input type="text" name="lname" placeholder="Фамилия" value="<?=$result['lname']?>">
					            </label>
					            <label>Имя:
					              <input type="text" name="fname" placeholder="Имя" value="<?=$result['fname']?>">
					            </label>
					            <label>Отчество:
					              <input type="text" name="sname" placeholder="Отчество" value="<?=$result['sname']?>">
					            </label>
					          </div>   
					          <div class="cont-form-l">
					            <label>Телефон:
					              <input type="text" name="phone" placeholder="+7 ( ___ ) __ - __ - __" value="<?=$result['phone']?>">
					            </label>
					            <label>E-mail: <span>*</span>:
					              <input type="text" name="email" required="" placeholder="pochta@me.com" value="<?=$result['email']?>">
					            </label>
					            <label>Адрес:
					              <input type="text" name="address" placeholder="pochta@me.com" value="<?=$result['address']?>">
					            </label>
					          </div>          
					          <div class="cont-form-r">
					            <label>Cообщение :
					              <textarea type="text" name="comment" placeholder="Напишите Ваше сообщение"><?=$result['comment']?></textarea>
					            </label>
					          </div>
					          <div class="cont-form-bot">
					            <button class="btn1 clearfix" type="submit">Изменить</button> 
					          </div>
					        </form>
					    </div>
				    <?endif;?>
		   		<?else:?>
			   		<?
			   			$params = escape_params($_GET);
			   			$condition = "WHERE TRUE ";

			   			if(isset($params['datefrom']) && $params['datefrom']!='')
			   				$condition .= "AND `datetime` >= '".str_replace("T", " ", urldecode($params['datefrom']))."'";
			   			if(isset($params['dateto']) && $params['dateto']!='')
			   				$condition .= "AND `datetime` <= '".str_replace("T", " ", urldecode($params['dateto']))."'";
			   			if(isset($params['with_phone']) && $params['with_phone']=='on')
			   				$condition .= "AND `phone` <> ''";

			   			$request = mysql_query("SELECT * FROM `bids` $condition");
			   			while($row = mysql_fetch_array($request, MYSQL_ASSOC))
			   				$result[] = $row;
			   		?>								
					<style type="text/css">
						table, tr, td
						{
						    border-collapse:collapse;
						    border:1px #000 solid;   
						}
						td
						{
						    padding:5px 5px;
						}
						tr:hover td
						{
						    background:#b9b9b9bf;
						    cursor:pointer;
						}
					</style>
					<div class="cont-form clearfix"  style="height: 200px;" >
			   			<form class="filter-cont" method="GET">
			   				<label>Время (от):
			   					<input type="datetime-local" name="datefrom" value="<?=urldecode($params['datefrom'])?>">
			   				</label>
				   			<label>Время (до):
				   				<input type="datetime-local" name="dateto" value="<?=urldecode($params['dateto'])?>">
				   			</label>
				   			<label>С телефоном:
								<input type="checkbox" name="with_phone" <?if(isset($params['with_phone']) && $params['with_phone']=='on'):?>checked="checked"<?endif;?> />
							</label>
			   				<input type="submit" class="btn1 clearfix" value="Принять">
			   				<a href="<?=strtok($_SERVER['REQUEST_URI'],'?')?>">Сброс</a>
			   			</form>
			   		</div>
	
					<?if(mysql_num_rows($request)==0):?>
						<b>Не найдено</b>
					<?else:?>
						<table>
							<th>
								<td>ID</td>
								<td>Имя</td>
								<td>Фамилия</td>
								<td>Отчество</td>
								<td>Телефон</td>
								<td>E-mail</td>
								<td>Дата заявки</td>
								<td>Комментарий</td>	
							</th>
							<?foreach ($result as $item):?>
								<tr onclick="window.location='<?=strtok($_SERVER["REQUEST_URI"],"?")?>?bid=<?=$item["id"]?>'">
									<?foreach ($item as $col):?>
										<td><?=$col?></td>
									<?endforeach;?>
								<tr>
							<?endforeach;?>
						</table>
					<?endif?>
				<?endif;?>

		   		
		   	</div>      
  </div> 
<?require_once($_SERVER["DOCUMENT_ROOT"]."/main/footer.php");?>