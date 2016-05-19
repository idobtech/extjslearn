/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'app',
        
        //系统新特性
        system: {
        	name: '工程项目合同及资金管理系统',
        	version: 'V1',
        	iconUrl: ''
        },
        
        
        //用户单位信息和用户信息
        user: {
        	company: '贵州博睿有限责任公司',
        	department: '工程部',
        	name: '火山哥'
        },
        
        //服务单位和服务人员信息
        service: {
        	company: '贵州大学ACMIS',
        	name: 'Mr Yang',
        	phonenumber: '1528512XXXX',
        	qq: '5930XXXXX',
        	email: '5930XXXXX@qq.com',
        	copyright: 'ACMIS'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});