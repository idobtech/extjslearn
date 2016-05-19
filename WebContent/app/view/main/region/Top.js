/**
 * 系统主页的顶部区域，主要防治系统名称、菜单和一些快捷按钮
 */

Ext.define('app.view.main.region.Top', {
      extend : 'Ext.toolbar.Toolbar',
      alias : 'widget.maintop',

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
//            glyph: f0c9,
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
            text : '关于'
          }, {
            text : '注销'
          },'->','->', {
            text : '搜索',
            glyph : 'f002@My Font Family'
//            iconCls: 'fa-search'
            
          }, {
            text : '设置'
          }]

    })