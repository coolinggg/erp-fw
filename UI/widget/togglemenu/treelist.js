
(function($) {
    $.extend($.fn, {
        ///<summary>
        /// apply a slider UI
        ///</summary>
        jTreeList: function(setting) {
            var ps = $.extend({
                //content holder(Object || css Selector)
                renderTo: $(document.body),
                treeData: [{'name':'node1', 'nodes':[{'name':'sub1','link':'firefoxuser','linktype':'html'},
                									 {'name':'sub1','link':'firefoxuser','linktype':'formtag'}]},
                		   {'name':'node2', 'nodes':[{'name':'sub1','link':'firefoxuser','linktype':'formtag'},
                									 {'name':'sub1','link':'#firefoxuser','linktype':'formtag'}]}
                		  ],
                treeIcon: ['lib/widget/treelist/images/left_ico_info.png','lib/widget/treelist/images/left_ico_info.png'],
				
                size: { listWidth: 200, listHeight: 100},
                onMenuClick: function() { }
            }, setting);
            
            ps.renderTo = (typeof ps.renderTo == 'string' ? $(ps.renderTo) : ps.renderTo);

  
          var treeTemplate = [
          '<div class="treelst">',
          '<% for(var i = 0; i < list.length; i++) { %>  ',
          	'<dl class="category">',
          		'<dt><a><span><img src=<%=listIcon[i]%>> <%=list[i].name%></span></a></dt>',
          		'<% for(var j = 0; j < list[i].nodes.length; j++) { %>',
          			' <dd> ',
          				'<span class="thespan" iconImg="images/firefox.png"  dataType="<%=list[i].nodes[j].linktype%>" dataLink="<%=list[i].nodes[j].link%>">',
          					'<%=list[i].nodes[j].name%></span>',
          				'</dd>',
          		'<% } %>',
          	'</dl>',
          '<% } %>',
          '</div>'].join('');
          
		  var html = _.template(treeTemplate, { 'list': ps.treeData,  'listIcon':ps.treeIcon});
		  ps.renderTo.html(html);
          return;
        }
        ///<summary>
        /// set slider value
        ///</summary>
        ///<param name="v">percentage, must be a Float variable between 0 and 1</param>
       

    });
})(jQuery);