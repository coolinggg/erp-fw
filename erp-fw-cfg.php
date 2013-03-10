<?php
//数据库设定
$GLOBALS['datagrid']['db']=array(
									'host' => 'localhost',                            
									'port'=> '3306',
									'type' => 'mysql',
									'user' => 'root',
									'passwd' => 'Beijing',
									'dbname' => 'u116782a',
									'charset'=> 'utf8'
									);
							
									
//设置时区									
date_default_timezone_set('Asia/Shanghai');

$GLOBALS['config']['ROOTURL'] = "";

defined('DS')		|| define('DS', DIRECTORY_SEPARATOR);
defined('ROOT_DIR')	|| define('ROOT_DIR', dirname(__FILE__).DS);

?>
