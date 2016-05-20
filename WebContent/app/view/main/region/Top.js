/**
 * 系统主页的顶部区域，主要防治系统名称、菜单和一些快捷按钮
 */

Ext.define('app.view.main.region.Top', {
      extend : 'Ext.toolbar.Toolbar',
      alias : 'widget.maintop',

      uses : ['app.uc.ButtonTransparent'], // uses 在当前类初始化 之后加载，requires是之前
      defaults : { // 设置默认的xtype , 应用到面板容器中所有元素配置对象
        xtype : 'buttontransparent'
      },

      items : [{
            xtype : 'image',
            bind : {
              hidden : '{!system.iconUrl}',
              src : '{system.iconUrl}'
            }
          }, {
            xtype : 'label',
            bind : {
              text : '{system.name}'
            },
            style : 'font-size: 20px; color: blue;'
          }, {
            xtype : 'label',
            bind : {
              text : '{system.version}'
            }
          }, '->', {
            text : '菜单',
             glyph: 'xf0c9@FontAwesome',
            menu : [{
                  text : '工程项目'
                }, {
                  text : '工程投标'
                }]
          }, ' ', ' ', {
            text : '主页'
          }, {
            text : '帮助'
          }, {
            text : '关于',
            glyph : 'xf129@FontAwesome'
          }, {
            text : '注销',
            glyph : 'xf08b@FontAwesome'
          }, '->', '->', {
            text : '搜索',
            glyph : 'xf002@FontAwesome' // 这是FonAwesome 图标的格式 x代替源码中的\ (如 \f002
                                        // ==>xf002)
          }, {
            text : '设置',
            glyph : 'xf013@FontAwesome'
          }, {
            glyph : 'xf0de @FontAwesome',
            handler : 'hiddenTopBottom', // 代替click事件
            tooltip : '隐藏顶部和底部区域' // The tooltip for the button
          }]

    })