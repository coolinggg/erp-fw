<!-- 
数据库服务类，像API一样调用

 -->
<?php
require_once("db_imp.php");

function getdb()
{
		if( empty($host) ) $dbhost = $GLOBALS['datagrid']['db']['host'];
		if( empty($user) ) $dbuser = $GLOBALS['datagrid']['db']['user'];
		if( empty($password) ) $dbpassword = $GLOBALS['datagrid']['db']['passwd'];
		if( empty($database) ) $database = $GLOBALS['datagrid']['db']['dbname'];
		if( empty($charset) ) $charset = $GLOBALS['datagrid']['db']['charset'];
		
	   if(!class_exists("PDO"))
	   {
         return new MysqlDB('mysql', $dbhost, $dbuser, $dbpassword, $database, $charset);
       }
	   else
	   {
         return new MysqlPDO('mysql', $dbhost, $dbuser, $dbpassword, $database, $charset);
       }
}
?> 	