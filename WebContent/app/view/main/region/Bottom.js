// Toolbar 默认的xtype是Button
Ext.define('app.view.main.region.Bottom', {
      extend : 'Ext.toolbar.Toolbar',
      xtype : 'mainbottom',  //在这里使用alias也可以但要添加点号如: widget.mainbottom
      
      uses: ['app.uc.ButtonTransparent'], //uses 在当前类初始化 之后加载，requires是之前
      defaults: {  //设置默认的xtype  , 应用到面板容器中所有元素配置对象
      	xtype: 'buttontransparent'
      },
      items : [{
            bind : {
            	text : '使用单位：{user.name}'
            }
          }, {
            bind : {
              text : '用户：{user.name}'
            }
          }, '->',{   //添加 '->'此代码将会给两个分栏分别已左右对其
            bind : {
              text : '服务单位：{service.company}'
            }
          }, {
            bind : {
              text : '服务人员：{service.name}'
            }
          }, {
            bind : {
              text : 'Tel：{service.phonenumber}'
            }
          }, {
            bind : {
              hidden : '{!service.email}',
              text : '{service.email}'
            }
          }, {
            bind : {
              text : '@{service.copyright}'
            }
          }]
    })