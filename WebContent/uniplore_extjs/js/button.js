 Ext.onReady(function charcreate() {
    var button =	Ext.create('Ext.button.Button', {   //是否添加button变量无影响
    	    text: 'Click me',
    	    renderTo: Ext.getBody(),
    	    handler: function() {
    	        alert('You clicked the button!');
    	    }
    	})
    	})