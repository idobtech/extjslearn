Ext.onReady(function Panel1() {
      var json = {
        Name : "panel1",
        Sex : "男",
        Age : 26,
        Married : false,
        Marks : [{
              name : "语文",
              Mark : 90
            }, {
              name : "数学",
              Mark : 98
            }],
        Address : {
          City : "武汉",
          Street : "光谷大道"
        }
      }
      var MyPanel = new Ext.Panel({ // 创建面板
        title : "面板应用",
        collapsible : true,
        titleCollapse : true,

        tbar : [{
              text : "打开"
            }, {
              text : "保存"
            }, {
              text : "关闭"
            }],
        bbar : [{
              text : '低端状态栏'
            }, {
              text : '状态栏2'
            }],
        renderTo : Ext.getBody(),
        x : 100,
        y : 50,
        width : 800,
        height : 500,
        frame : true,
        floating : true,// 当设置floating为true时x,y项才有效
        draggable : true, // 可拖动

        activeTab : 0,// 初始显示第几个Tab页
        tabPosition : 'top',// 表示TabPanel头显示的位置,只有两个值top和bottom.默认是top.
        enableTabScroll : true,// 当Tab标签过多时,出现滚动条
        bodyBorder : true,// 绑定在body标签上
        deferredRender : false,// 是否在显示每个标签的时候再渲染标签中的内容.默认true

        html : "<font color='red'>用户名:" + json.Name + "</font>" + '<br>' + "年龄:" + json.Age + "<br>数学成绩:" + json.Marks[1].Mark + "<br>所在地址:" + json.Address.City + json.Address.Street,
        tools : [{
              id : 'toggle'
            }, {
              id : 'save'
            }, {
              id : 'help',
              handler : function() {
                alert("你需要我的帮助");
              }
            }, {
              id : 'refresh'
            }, {
              id : 'maximize'
            }, {
              id : 'close'
            }]
      });

    })