<?php
require_once("AbstractServer/dao/db.php");

abstract class controller
{
    private $app;
	public $db;
	public function __construct()
	{
		//$this -> db = getdb();
	}


	public function setappname($appname)
	{
	   $this->app=$appname;
	}
	public function display($tpl, $params=null)
	{
		try
		{
			$engine = View::getEngine($this->app);
			if(!empty($params))
			{
				$params['ROOTURL'] = ROOTURL;
				$engine->assign($params);
			}
			$output = $engine->fetch($tpl);
			echo $output;
			return $this;
		}
		catch(Exception $e)
		{
			echo $e->getMessage();
		}
	}
}
defined('FRAME_SMARTY_DIR')	|| define('FRAME_SMARTY_DIR', ROOT_DIR . '/AbstractServer/libs/Smarty/');

final class View{
	public static function getEngine($app){
		static $smarty = NULL;
		if(NULL === $smarty)
		{
			$fileSmarty = FRAME_SMARTY_DIR.'SmartyBC.class.php';
			if(file_exists($fileSmarty))
			{
				require_once $fileSmarty;
				$smarty					=	new SmartyBC();
				$smarty->compile_check	=	true;
				$smarty->caching		=	0;
				$smarty->compile_dir	=	ROOT_DIR.'cache';
				$smarty->template_dir	=	ROOT_DIR. '/UI/tpl/';
				$smarty->plugins_dir	=	array(FRAME_SMARTY_DIR.'plugins');
				//var_dump($smarty);exit();
				return $smarty;
			}
			else
			{
				
			}
		}
	}
}
?> 