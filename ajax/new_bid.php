<?if(!defined("PROLOG_INCLUDED") || !PROLOG_INCLUDED) include_once($_SERVER["DOCUMENT_ROOT"]."/core/prolog.php");?>
<?
	if (isset($_POST['email'])) {

		$data = escape_params($_POST);

		//file_put_contents("debug.txt", print_r($data, true));


		$result = mysql_query("INSERT INTO `test`.`bids` (`lname`, `fname`, `sname`, `phone`, `email`, `address`, `datetime`, `comment`) VALUES ('".$data['lname']."', '".$data['fname']."', '".$data['sname']."', '".$data['phone']."', '".$data['email']."', '".$data['address']."', CONCAT(CURDATE(), ' ', CURTIME()), '".$data['comment']."')");

		//file_put_contents("debug0.txt", print_r($result, true));

		if (!$result) {
		    $message  = 'Неверный запрос: ' . mysql_error() . "\n";
		    $message .= 'Запрос целиком: ' . $query;
		    die($message);
		}
	}
/*

	Array
(
    $data['lname'] => 1111
    $data['fname'] => 2222
    $data['sname'] => 3333
    $data['phone'] => 555555555555
    $data['email'] => 1@1.er
    $data['address'] => 44444
    $data['comment'] => 666666666\' OR \'\'=\'
)
*/