<?php

if($_REQUEST["uiModelType"] == "uiModelCrud")
{

}
else if($_REQUEST["uiModelType"] == "uiTable")
{
	if($_REQUEST["uiModelName"] == "order")
	{
		echo '{"columns":["订单编号","购买者","城市","状态","创建日期","转生产日期","生产批次"]}';
	}
	else if($_REQUEST["uiModelName"] == "kucun")
	{
		echo '{"columns":["批次","产品名称","产品编号","产品数量","创建日期","状态"]}';
	}
}
else if($_REQUEST["uiModelType"] == "uiDialogForm")
{
	if($_REQUEST["uiModelName"] == "order")
	{
		echo '{"title": "增加订单"}';
	}
	else if($_REQUEST["uiModelName"] == "kucun")
	{
		echo '{"title": "增加库存"}';
	}
	
}
else if($_REQUEST["uiModelType"] == "uiForm")
{
echo '{"fields":[{"fieldname":"ddd","fieldtype":"text", "desc":"订单编号", "validstring":"订单编号"},
{"fieldname":"ddd2","fieldtype":"text", "desc":"购买者", "validstring":"至少1个字符"},
{"fieldname":"ddd3","fieldtype":"text", "desc":"城市", "validstring":""},
{"fieldname":"ddd4","fieldtype":"text", "desc":"状态", "validstring":"已转/未转"},
{"fieldname":"ddd5","fieldtype":"text", "desc":"创建日期", "validstring":"年-月-日"},
{"fieldname":"ddd6","fieldtype":"text", "desc":"转生产日期", "validstring":"年-月-日"},
{"fieldname":"ddd7","fieldtype":"text", "desc":"生产批次", "validstring":"批次编号"}

],
"formattr":{"formname":"xxx","action":"getjson.php","submitButton":"subxxx"}}';
}

?>