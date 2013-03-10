(function($) {



    $.extend($.fn, {

        jDialogForm: function(setting) {
            var uiModelType = "uiDialogForm";

            var ps = $.extend({
                uiModelName  : "fff",
                uiSubModelName  : "Matiral",

                uiModelData:{},              

                onSuccess: function(data) { }
            }, setting);
            
            ps.uiModelData = $.extend({title: "增加"}, ps.uiModelData);

            if(getUIModelUrl())
            {
                ps.uiModelData = getUIModel(getUIModelUrl(), uiModelType, ps.uiModelName);
            }

         new Dialog('',
          {
            title: ps.uiModelData.title,
            id:'dialog-'+ps.uiModelName,
            beforeShow:function(dialog)
            {
              var option = {uiModelName: ps.uiSubModelName, renderTo: '#dialog-'+ps.uiModelName + ' .content'};
              option.onSuccess = function(data) 
              {
                ps.onSuccess();
                dialog.close();
                return true;
             };

            $.fn.jForm(option);
            dialog.resetPos();
            return true;
          }
        }).show();
      return;
    }
    });
})(jQuery);