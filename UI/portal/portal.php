<?php
require_once("AbstractServer/controler/basecontroler.php");

class portal extends controller{

	public function get()
	{
		if(isset($_REQUEST["index"]))
		{
			$this->display($_REQUEST["index"] . '.html');
		}
		else
		{
			$this->display('order' . '.html');
		}
		
	}
}
?>