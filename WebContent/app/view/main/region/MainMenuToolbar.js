Ext.define('app.view.main.region.MainMenuToolbar',{
	extend: 'Ext.toolbar.ToolBar',
	alias: 'widget.mainmenutoolbar',
	defaults:{
		xtype:'buttontransparent'
	},
	
	 items: [{
          glyph: 'xf0c9@FontAwesome',
        tooltip: '在左边栏中显示树状菜单', // 几种菜单样式切换的按钮
        disableMouseOver: true,
        margin: '0 -5 0 0'
    }, {
       glyph: 'xf0c9@FontAwesome',
        tooltip: '在顶部区域显示菜单',// 几种菜单样式切换的按钮
        disableMouseOver: true
    }],
    	viewModel: 'main',
    	initComponent: function () {

        // 把ViewModel中生成的菜单items加到此toolbar的items中
        this.items = this.items.concat(this.getViewModel().getMenus());

        this.callParent();
    }
    
})