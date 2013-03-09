<?php
require_once("AbstractServer/dao/db.php");

class RestAPI
{
	public $db;
	public function  __construct()
	{
		$this->db = getdb();
	}


	public function get($params)
	{
		//var_dump($params);
		$sql = "select * from " . $params["obj"] . " where fid = " . $params["fid"];
		$one = $this -> db -> getRow($sql);	
		var_dump($sql);
		var_dump($one);
		return $one;
	}
	public function add($params)
	{
		$sql = "insert into " . $params["obj"] . "(";
		$value ="";
		foreach($params as $key=>$val)
		{
			if($key == "obj") continue;
			$sql .= $key .",";
			$value .= "'" . $val ."',";
		}
		$sql = substr($sql,0,-1);
		$value = substr($value,0,-1);
		
		$sql .= ") values(" . $value . ")";
		
		$result = $this -> db -> query($sql);
		
		return array("result"=>$this -> db ->insertId());
	}
	public function modify($params)
	{
		$sql = "update " . $params["obj"] . " set ";
		foreach($params as $key=>$val)
		{
			if($key == "obj") continue;
			if($key == "id") continue;
			$sql .= $key ." = '". $val ."',";
		}
		$sql = substr($sql,0,-1);
		$sql .= " where thetitle='" . $params["thetitle"] ."'";
		
		$result = $this -> db -> query($sql);
		return array("result"=>$result);
	}
	public function delete($params)
	{
		$sql = "delete from " . $params["obj"] . " where thetitle = '" . $params["thetitle"] ."'";
		$result = $this -> db -> query($sql);
		return array("result"=>$result);
	}	
}
