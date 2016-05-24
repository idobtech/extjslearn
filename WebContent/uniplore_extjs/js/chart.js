Ext.onReady(function() {
      var store1 = Ext.create('Ext.data.JsonStore', {
            fields : ['name', 'data'],
            data : [{
                  name : '0~10岁',
                  data : 20
                }, {
                  name : '11~20岁',
                  data : 70
                }, {
                  name : '21~30岁',
                  data : 55
                }, {
                  name : '30岁以上',
                  data : 75
                }]
          });
      var chart = Ext.create('Ext.chart.Chart', {
            xtype : 'chart',
            store : store1,
            axes : [{
              type : 'Numeric',// 配置坐标类型为数值坐标
              dashSize : 10,// 坐标轴前导线条长度，默认3
              position : 'left',// 配置坐标在左侧
              fields : ['data'],// 指定坐标对应的字段
              title : '百分比',// 配置坐标轴标题
              grid : {
                // 奇数行
                odd : {
                  opacity : 1,// 不透明
                  fill : '#FFFF99',// 表格内填充色
                  stroke : '#FF3300',// 表格线颜色
                  'stroke-width' : 0.5
                  // 表格线宽度
                },
                // 偶数行
                even : {
                  opacity : 0,//
                  stroke : '#6600CC',// 表格线颜色
                  'stroke-width' : 0.5
                  //
                }
              },
              majorTickSteps : 10,// 主区间数
              minorTickSteps : 3
                // 副区间数
              }, {
              type : 'Category',// 配置坐标类型为目标坐标
              position : 'bottom',// 配置坐标在底部
              fields : ['name'],// 指定坐标对应的字段
              title : '年龄段'// 配置坐标轴标题
            }],
            series : [{
                  type : 'line',
                  axis : 'left',
                  xField : 'name',// 横轴字段
                  yField : 'data'// 纵轴字段
                }]
          });
       Ext.create('Ext.window.Window', {
            width : 800,
            height : 600,
            minHeight : 400,
            minWidth : 550,
            hidden : false,
            maximizable : true,
            title : 'Chart',
            autoShow : true,
            layout : 'fit',
            tbar : [{
                  text : 'Save Chart',
                  handler : function() {
                    Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice) {
                          if (choice == 'yes') {
                            chart.save({
                                  type : 'image/png'
                                });
                          }
                        });
                  }
                }],
            items : chart
          });
    })