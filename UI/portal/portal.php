<?php
require_once("AbstractServer/controler/basecontroler.php");

class portal extends controller{

	public function get()
	{
		$this->display('demo.html');
	}
}
?>