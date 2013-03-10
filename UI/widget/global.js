
function getUIModelUrl() 
{
	return "/erp-fw/UI/uiservice/ui.php";
}

function getUIModel(url, modelType, modelName) 
{
	var result={};
	$.getJSON(url, {'uiModelType': modelType, 'uiModelName': modelName}, function(data, textStatus)
	{
		result = data;
	});
	return result;	
}

function getDataModelUrl() 
{
	return "/erp-fw/BI/biservice/bi.php";
}

function getDataModel(url, modelType, modelName) 
{
	var result = {};
	$.getJSON(url, {'uiModelType': modelType, 'uiModelName': modelName}, function(data, textStatus)
	{
		result =  data;
	});
	return result;
}

$.ajaxSettings.async = false;