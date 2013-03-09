(function($) {
    $.extend($.fn, {

        jTitleMenu: function(setting) {
            var ps = $.extend({
                renderTo: $(document.body),
                Data: [{"name":"xxx1", "link":"xxx2"}, {"name":"xxx2", "link":"xxx2"}, {"name":"xxx3", "link":"xxx3"}],
                Icon: ['images/left_ico_money.png','images/left_ico_money.png','images/left_ico_money.png'],
                onMenuClick: function() { }
            }, setting);
            
            ps.renderTo = (typeof ps.renderTo == 'string' ? $(ps.renderTo) : ps.renderTo);

            var menuTemplate = [
          '<div class="title-menu">',
          '<% for(var i = 0; i < Data.length; i++) { %>  ',
            '<li class="title-menu-item">',
                '<a href="<%=Data[i].link%>" >',
                    '<span class="title-menu-text" style="background: url(\'<%=Icon[i]%>\') no-repeat scroll 0 0 transparent;"><%=Data[i].name%></span>',
                '</a>',
            '</li>',
          '<% } %>',
          '</div>'].join('');

    	  var html = _.template(menuTemplate, { 'Data': ps.Data,  'Icon':ps.Icon});
		  ps.renderTo.html(html);
          return;
        }
    });
})(jQuery);