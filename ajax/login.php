<?if(!defined("PROLOG_INCLUDED") || !PROLOG_INCLUDED) include_once($_SERVER["DOCUMENT_ROOT"]."/core/prolog.php");?>
<?
	if (isset($_POST['login'])) {

		$data = escape_params($_POST);

		//file_put_contents("debug1.txt", print_r($data, true));

		$result = mysql_query("SELECT `id` FROM `managers` WHERE `login` = '".$data['login']."' AND `passhash` = '".$data['password']."'");

		if (!$result) {
		    $message  = 'Неверный запрос: ' . mysql_error() . "\n";
		    $message .= 'Запрос целиком: ' . $query;
		    die($message);
		}

		if(mysql_num_rows($result)===0)
			return;
		$row = mysql_fetch_array($result);

		//file_put_contents("debug10.txt", print_r($row, true));
		$_SESSION['loggedin'] = true;
    	$_SESSION['userid'] = $row["id"];
    	echo $_SESSION['loggedin'];
	}
