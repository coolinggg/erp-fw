
function getUIModelUrl() 
{
	return false;
}

function getUIModel(url, modelType, modelName) 
{
	$.getJSON(url, {'uiModelType': modelType, 'uiModelName': modelName}, function(data, textStatus)
	{
		return data;
	});
}

function getDataModelUrl() 
{
	return false;
}

function getDataModel(url, modelType, modelName) 
{
	$.getJSON(url, {'uiModelType': modelType, 'uiModelName': modelName}, function(data, textStatus)
	{
		return data;
	});
}