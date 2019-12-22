<?if(!defined("PROLOG_INCLUDED") || !PROLOG_INCLUDED) include_once($_SERVER["DOCUMENT_ROOT"]."/core/prolog.php");?>
<?
	if (isset($_POST['email'])) {

		$data = escape_params($_POST);

		//file_put_contents("debug.txt", print_r($data, true));

		$result = mysql_query("UPDATE `test`.`bids` SET `lname` = '".$data['lname']."', `fname` = '".$data['fname']."', `sname` = '".$data['sname']."', `phone` = '".$data['phone']."', `email` = '".$data['email']."', `address` = '".$data['address']."', `comment` = '".$data['comment']."' WHERE `bids`.`id` = ".$data['id']);

		if (!$result) {
		    $message  = 'Неверный запрос: ' . mysql_error() . "\n";
		    $message .= 'Запрос целиком: ' . $query;
		    die($message);
		}
	}