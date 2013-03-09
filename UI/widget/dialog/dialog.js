(function($) {
    $.extend($.fn, {

        jForm: function(setting) {
            var ps = $.extend({
                renderTo: $(document.body),
                fields: [{"fieldname":"ddd","fieldtype":"text", "desc":"sss", "validstring":"至少1个字符"},{"fieldname":"ddd","fieldtype":"text", "desc":"sss", "validstring":"至少1个字符"}],
                formattr: {"formname":"xxx","action":"xxx","submitButton":"subxxx","success":function(data) { } },
                onMenuClick: function() { }
            }, setting);
            
            ps.renderTo = (typeof ps.renderTo == 'string' ? $(ps.renderTo) : ps.renderTo);

            var menuTemplate = [
           '<form action="<%=formattr.action%>" method="post" name="<%=formattr.formname%>" id="<%=formattr.formname%>">',
            '<table style="font-size: 12px;" width="100%" border="0px">',
              '<tbody> ',
                '<% for(var i = 0; i < fields.length; i++) { %>  ',
                '<tr> ',
                  '<td align="right"><%=fields[i].desc%>:</td>',
                  '<td><input id="<%=fields[i].fieldname%>" name="<%=fields[i].fieldname%>" type="<%=fields[i].fieldtype%>"> </td>',
                  '<td style="width:300px;"><div class="onCorrect" id="<%=fields[i].fieldname%>Tip" ><%=fields[i].validstring%></div></td>',
                '</tr>',
                '<%}%>',
                '<tr><td></td><td align="right"><input id="<%=formattr.submitButton%>" type="submit" value="提交2" name="<%=formattr.submitButton%>"></td></tr>',
            '</tbody>',
            
            '</table></form>'].join('');

    	  var html = _.template(menuTemplate, { 'fields': ps.fields,  'formattr':ps.formattr});
		      ps.renderTo.html(html);


          $.formValidator.initConfig({formID:ps.formattr.formname,theme:"Default",submitOnce:true,
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
            buttons : $("#"+ps.formattr.submitButton),
            url : ps.formattr.action,
            success : ps.formattr.success,
            error : function(data) {alert("提交错误");}
          }
        }); 

                
        $("#ddd").formValidator({onShow:"请输入至少1333个长度",
                                  onFocus:"至少1333个长度",
                                  onCorrect:"密码合法"
                                  }).inputValidator({min:1,empty:{leftEmpty:false,rightEmpty:false,emptyError:"密码两边不能有空符号"},onError:"密码不能为空,请确认"});
   
      return;
    }
    });
})(jQuery);