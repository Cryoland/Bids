<?
require_once($_SERVER["DOCUMENT_ROOT"]."/core/functions.php");
require_once($_SERVER["DOCUMENT_ROOT"]."/core/dbconn.php");


define("PROLOG_INCLUDED", true);

define("DEFAULT_CSS_PATH", "/template/css/main.css");
define("CSS_FOLDER", "/template/css");

define("DEFAULT_JS_PATH", "/template/js/main.js");
define("JS_FOLDER", "/template/js");

$sectionParams = Array(
    "title" => "Прием заявок",  
    "description" => "Форма",
    "h1" => "Заявки",
); 

if(file_exists($sec = getcwd()."/.section.php"))
    include_once($sec);

session_start();
ob_start();