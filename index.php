<?php
require "erp-fw-cfg.php";
require "AbstractServer/routing.php";

//var_dump($_REQUEST);;
/*print_r($_SERVER);;
echo "<br/>";
echo "<br/>";
echo $_SERVER["QUERY_STRING"];
echo "<br/>";
echo $_REQUEST["m"];
echo "<br/>";
list($path, $param) = explode("?", $_SERVER["REQUEST_URI"]);
echo $param;
echo "<br/>";
$_params = explode('&',$param);
print_r($_params);;
echo "<br/>";
*/
$dir = dirname(str_replace($_SERVER['DOCUMENT_ROOT'], '', $_SERVER['SCRIPT_FILENAME']));
$GLOBALS['config']['ROOTURL'] = ($dir == '.' ? '' : $dir . '/');

$aa = new routing();
$aa->go();
?>