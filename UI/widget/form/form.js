(function($) {

    var initValues = function(fieldsvalues)
    {
        if(undefined != fieldsvalues)
         {
          for (var i in fieldsvalues) 
          { 
            $("#"+i).val(fieldsvalues[i]);
          }
         }
    }

    $.extend($.fn, {

        jForm: function(setting) {
          var uiModelType = "uiForm";

          var ps = $.extend({
            uiModelName  : "fff",
            uiModelData:{},

            biModelData: {"ddd":"xxx","ddd2":"xxx" },
            
            renderTo: $(document.body),
            onSuccess: function(data) { }
          }, setting);

          ps.uiModelData = $.extend({
            fields: [{"fieldname":"ddd","fieldtype":"text", "desc":"sss", "validstring":"至少1个字符"},
                     {"fieldname":"ddd2","fieldtype":"text", "desc":"sss", "validstring":"至少1个字符"}],
            formattr: {"formname":"xxx","action":"xxx","submitButton":"subxxx" }
            
           }
            , ps.uiModelData);

          ps.renderTo = (typeof ps.renderTo == 'string' ? $(ps.renderTo) : ps.renderTo);

          if(getUIModelUrl())
          {
              ps.uiModelData = getUIModel(getUIModelUrl(), uiModelType, ps.uiModelName);
          }
          if(getDataModelUrl())
          {
              ps.biModelData = getDataModel(getDataModelUrl(), uiModelType, ps.uiModelName);
          }

            var menuTemplate = [
           '<form action="<%=formattr.action%>" method="post" name="<%=formattr.formname%>" id="<%=formattr.formname%>">',
            '<table style="font-size: 12px;" width="100%" border="0px">',
              '<tbody> ',
                '<% for(var i = 0; i < fields.length; i++) { %>  ',
                '<tr> ',
                  '<td align="right"><%=fields[i].desc%>:</td>',
                  '<td><input id="<%=fields[i].fieldname%>" name="<%=fields[i].fieldname%>" type="<%=fields[i].fieldtype%>"> </td>',
                  '<td style="width:200px;"><div class="onCorrect" id="<%=fields[i].fieldname%>Tip" ><%=fields[i].validstring%></div></td>',
                '</tr>',
                '<%}%>',
                '<tr><td colspan="3" style="padding-left:30px;" align="right"><input style="width:80px;" id="<%=formattr.submitButton%>" type="submit" value="确定" name="<%=formattr.submitButton%>"></td></tr>',
            '</tbody>',
            
            '</table></form>'].join('');

    	  var html = _.template(menuTemplate, { 'fields': ps.uiModelData.fields,  'formattr':ps.uiModelData.formattr});
		      ps.renderTo.html(html);

          initValues(ps.uiModelData.fieldsvalues);

          $.formValidator.initConfig({formID:ps.uiModelData.formattr.formname,theme:"Default",submitOnce:false,
          onError:function(msg,obj,errorlist){
            $("#errorlist").empty();
            $.map(errorlist,function(msg){
              $("#errorlist").append("<li>" + msg + "</li>")
            });
            alert(msg);
          },
          ajaxPrompt : '有数据正在异步验证，请稍等...',
          ajaxForm : {
            type : "POST",
            dataType : "json",
            buttons : $("#"+ps.uiModelData.formattr.submitButton),
            url : ps.uiModelData.formattr.action,
            success : ps.onSuccess,
            error : function(data) {alert("提交错误");}
          }
        }); 

                
        $("#ddd").formValidator({onShow:"请输入至少10个长度",
                                  onFocus:"至少10个长度",
                                  onCorrect:"合法"
                                  }).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"订单编号不能为空,请确认"});
   
      return;
    }
    });
})(jQuery);