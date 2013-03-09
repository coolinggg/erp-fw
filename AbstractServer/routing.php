<?php
 
defined('FRAME_SMARTY_DIR') || define('FRAME_SMARTY_DIR', ROOT_DIR.'AbstractServer'.DS.'libs'.DS.'Smarty'.DS);

defined('UI_SERVER_DIR') || define('UI_SERVER_DIR', ROOT_DIR.'UIServer'.DS);
defined('BUSINESS_SERVER_DIR') || define('BUSINESS_SERVER_DIR', ROOT_DIR.'BusinessServer'.DS);

session_start();

class routing{

     private $resourceFile;
     private $resourceClass;
	 
	 private $app;
	 private $resourceType;
     private $resourcePath;
	 private $resource;
     private $method;

    private $objParams = array();

    public function  __construct()
    {
    }     

     private function parse()
     {
        $this->_parseResource();
        $this->_parseMethod();
        $this->_getResourceFile();
        $this->_getResourceClassname();
     }

     private function _parseResource()
     {
         if(isset($_REQUEST["r"]))
         {
            $resouceURI = $_REQUEST["r"];
            $resourceURIPaths = explode('/',$resouceURI);
            $this->resourceType = array_shift($resourceURIPaths); 
            $this->resourcePath = implode('/', $resourceURIPaths);
            $this->resource = $resourceURIPaths[count($resourceURIPaths) - 1];
            $this->objParams['resource'] = $this->resourcePath;

           if (!in_array($this->resourceType, array('BusinessServer', 'UIServer'))) 
           {
              die("resourceType(".$this->resourceType.")非法");
           }

         }
         else
         {
            $this->resourcePath = 'portal';
            $this->resourceType = 'UIClient';
            $this->resource = "portal";
         }
     }
     private function _parseMethod()
     {
         if(isset($_REQUEST["m"]))
         {
            $this->method = $_REQUEST["m"];
         }
         else
         {
            $this->method = "get";
         }
     }     

     private function _getResourceFile()
	 {
        $this->resourceFile = ROOT_DIR . $this->resourceType. "/". $this->resourcePath . "/" .$this->resource. ".php";
        if(file_exists($this->resourceFile))
        {
            require_once $this->resourceFile;
            $this->resourceClass = $this->resource;
        }
        else
        {
            //echo $this->resourceFile;
            if (!in_array($this->method, array('get', 'add','mod', 'del'))) 
            {
                die("$this->method(".$this->method.")非法");
            }
            require_once 'controler/resourceRestAPI.php';
            $this->resourceClass = 'RestAPI';

            $this->objParams = array_merge($this->objParams, $_REQUEST);  
        }
     }

     private function _getResourceClassname()
	 {
         if(!class_exists($this->resourceClass))
         die("resource(".$this->resourceClass.")解析错误");
     }

     public function go()
	 {
        $this->parse();
        
        $c = new $this->resourceClass();
        if(!method_exists($c, $this->method))
		die("Controler方法名(".$this->resourceClass."::". $this->method. ")解析错误");
        call_user_func_array(array($c , $this->method), array($this->objParams));
     }
}
?> 
