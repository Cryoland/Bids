<?

$buffer = ob_get_contents();
ob_end_clean();

/*
    modify output buffer
*/

print($buffer);