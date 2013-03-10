(function($) {



    $.extend($.fn, {

        jModelCrud: function(setting) {
            var uiModelType = "uiModelCrud";

            var ps = $.extend({
                uiModelName  : "modelGrud-fff",
                uiModelData:{},
               
                uiTableModelName: "table-ddd",
                uiDialogFormModelName: "dialog-ddd",
                uiFormModelName: "form-ddd",

                renderTo: $(document.body)
            }, setting);
            ps.renderTo = (typeof ps.renderTo == 'string' ? $(ps.renderTo) : ps.renderTo);
            ps.uiModelData = $.extend({title: "物料管理"}, ps.uiModelData);

            if(getUIModelUrl())
            {
                ps.uiModelData = getUIModel(getUIModelUrl(), uiModelType, ps.uiModelName);
            }

            var menuTemplate = [
            '<button id="additem" class="bg-color-gray button-text-gray">增    加</button>',
            '<button id="additem2" class="bg-color-gray button-text-gray">批量导出</button>',
            '<button id="additem3" class="bg-color-gray button-text-gray">过    滤</button>',
            '<div id="<%=container%>" style="width:100%; border: solid 1px #DDDDDD;"></div>'].join('');

            var html = _.template(menuTemplate, {'container': ps.uiTableModelName + "-container"});
            ps.renderTo.html(html);

     
            $.fn.jTable({uiModelName: ps.uiTableModelName,renderTo: "#" + ps.uiTableModelName + "-container"});
          

            var creatCrudDialog = function()
            {
              $.fn.jDialogForm({uiModelName: ps.uiDialogFormModelName,uiSubModelName: ps.uiFormModelName,
                onSuccess: function(data) {alert("=====");}});
            }
            var creatSelectDialog = function()
            {
              $.fn.jDialogTable({uiModelName: ps.uiDialogFormModelName,uiSubModelName: ps.uiFormModelName,
                onSuccess: function(data) {alert("=====");}});
            }

            $('#additem').click(function() {creatCrudDialog();});
            $('#additem2').click(function(){creatSelectDialog();});
            $('#additem3').click(function(){creatCrudDialog();});



      return;
    }
    });
})(jQuery);