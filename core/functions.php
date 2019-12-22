<?
	if(!function_exists("attach_file"))
	{
	    function attach_file($path)
	    {
	        return $path."?v=".filemtime($_SERVER["DOCUMENT_ROOT"].$path);
	    }
	}
	if(!function_exists("escape_params"))
	{
		function escape_params($array)
		{
			if(!is_array($array)) return array();
			$new_arr = array();
			foreach ($array as $key => $value) {
				$new_arr = array_merge($new_arr, array($key => mysql_real_escape_string($value)));
			}
			return $new_arr;
		}
	}