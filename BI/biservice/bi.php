<?php

if($_REQUEST["uiModelType"] == "uiModelCrud")
{

}
else if($_REQUEST["uiModelType"] == "uiTable")
{
	if($_REQUEST["uiModelName"] == "order")
	{
		echo '[ ["2013030303","asdf","asdf","asdf","asdf","asdf","asdf"],["2013030305","asdf","asdf","asdf","asdf","asdf","asdf"],["2013030344","asdf","asdf","asdf","asdf","asdf","asdf"]]';
	}
	else if($_REQUEST["uiModelName"] == "kucun")
	{
		echo '[ ["2013030303","asdf","asdf","asdf","asdf","asdf"],["2013030305","asdf","asdf","asdf","asdf","asdf"],["2013030344","asdf","asdf","asdf","asdf","asdf"]]';
	}
}
else if($_REQUEST["uiModelType"] == "uiDialogForm")
{
	
}
else if($_REQUEST["uiModelType"] == "uiForm")
{
	if($_REQUEST["uiModelName"] == "order")
	{
		echo '{"fields":[{"fieldname":"ddd","fieldtype":"text", "desc":"sss--", "validstring":"至少1个字符"},
		{"fieldname":"ddd2","fieldtype":"text", "desc":"sss--", "validstring":"至少1个字符"}],
		"formattr":{"formname":"xxx","action":"getjson.php","submitButton":"subxxx"}}';
	}
}

?>