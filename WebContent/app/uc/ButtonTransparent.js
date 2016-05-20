Ext.define('app.uc.ButtonTransparent',{
	extend: 'Ext.button.Button',
	alias: 'widget.buttontransparent',
	
	initComponent: function(){
	    //listeners这个config object用于初始化时监听
		//鼠标移开，背景设置透明
		this.listeners = {
			mouseout: function(){
				this.setTransparent(document.getElementById(this.id));
			},
			
			//鼠标移过，背景取消透明
			mouseover: function(){
				var button = document.getElementById(this.id);
				button.style.backgroundImage = '';
				button.style.backgroundColor = '';
				button.style.borderColor = '';
			},
			
			//背景设置透明
			afterrender: function() {
				this.setTransparent(document.getElementById(this.id));
			}
		}
		
		this.callParent(arguments); //调用你模块的initComponent 函数 ps:在什么方法内调用callParent，那么就是调用其父类的方法
	},
	
	//自定义函数
	setTransparent: function(b) {
		b.style.backgroundImage = 'inherit';
		b.style.backgoundColor = 'inherit';
		b.style.borderColor = 'transparent';
//		b.style.borderColor = 'red';
	}
	
})