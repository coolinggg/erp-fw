(function($) {
    $.extend($.fn, {

        jTable: function(setting) {
            var uiModelType = "uiTable";
            var ps = $.extend({
                uiModelName  : "fff",
                uiModelData:{},

                biModelName  : "fff",
                biModelData:[[1,2,3]],

                renderTo: $(document.body)
            }, setting);
            
          ps.uiModelData = $.extend({
                columns: ['title1','title2','title3']}
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
           '<table class="hovered"> ',
            '<thead> ',
            '<tr> ',
          '<% for(var i = 0; i < columns.length; i++) { %>  ',
            '<%if (i==0) {%> ',
            '<th><%=columns[i]%></th>',
            '<%} else {%> ',
            '<th class="right"><%=columns[i]%></th>',
            '<%} }%> </tr></thead><tbody>',
            '<% for(var i = 0; i < datas.length; i++) { %>  ',
              '<tr>',
              '<% for(var j = 0; j < datas[i].length; j++) { %>  ',
                '<%if (j==0) {%> ',
                  '<td><%=datas[i][j]%></td>',
                  '<%} else {%> ',
                  '<td class="right"><%=datas[i][j]%></td>',
              '<%} }}%> </tr>',
            '</tbody></table>'].join('');

    	  var html = _.template(menuTemplate, { 'datas': ps.biModelData,  'columns':ps.uiModelData.columns});
		      ps.renderTo.html(html);
          return;
        }
    });
})(jQuery);