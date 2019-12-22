<?

$dbuser = "root";
$dbname = "test";
$dbpassword = "mysql";
$server = "localhost";
$connection = "";

$link = mysql_connect($server, $dbuser, $dbpassword);
	if (!$link) die('Connection error: ' . mysql_error());
		else $connection = mysql_select_db($dbname,$link);

mysql_query("SET NAMES 'utf8'");		