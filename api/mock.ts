export const getRenderData = () => {
    return { "hashId": "z2pox8LoJb", "createdBy": "80280239/张蓉蓉", "updatedBy": "80280239/张蓉蓉", "createdAt": 1639703316000, "updatedAt": 1640001655000, "envTag": "qa", "appCode": "d7d6380dac6d", "appKey": "d7d6380dac6d-qa", "appName": "平台权限", "appNickname": "平台权限", "description": "", "color": "#1098F7", "version": "1.0.0-beta.1", "isAllAccess": 1, "usePlatformNav": 1, "appEntrance": 0, "useExternalAuth": false, "externalAuthApiKey": "", "bizOnly": 0, "departmentInfo": [{ "id": "2c9e64a471598ca401715a20f0bf0648", "path": "招商银行", "label": "2c9e64a471598ca401715a20f0bf0648", "value": "招商银行" }], "renderConfig": { "header": 1, "headerUrl": null, "headerFileName": null, "sider": 1, "siderUrl": null, "siderFileName": null, "layout": 1 }, "consts": {}, "releaseUnit": { "releaseUnitCode": null, "releaseUnitGroupId": null, "disable": 0, "gitRepo": null }, "syncGitRepo": null, "customComponentsSrc": "", "customPluginsSrc": null, "externalCSS": [], "externalJS": [], "requestAdaptor": "", "responseAdaptor": "", "dataType": "json", "allowedHeaderList": "", "theme": { "baseTheme": "cxd", "vars": [], "styleLanguage": "css" }, "components": [], "hasPage": true, "appRoleRelated": true, "appOwner": true, "pages": [{ "createdBy": "-/-", "updatedBy": "-/-", "componentResources": { "day_detail": false }, "id": "nywlJPyZgX", "companyKey": "e0f88", "appCode": "d7d6380dac6d", "pageKey": "d7d6380dac6dPAGE0001", "title": "运营首页", "description": "", "type": 1, "visible": true, "icon": "fas file-alt", "config": { "enableWatermark": false }, "url": "", "blank": false, "currentKey": "d7d6380dac6dPAGE0001" }] }
}

export const getPageData = () => {
    return {
        "type": "page",
        "title": "表单页面",
        "body": [
            {
                "type": "form",
                "mode": "horizontal",
                "api": "https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm",
                "body": [
                    {
                        "label": "Name",
                        "type": "input-text",
                        "name": "name"
                    },
                    {
                        "label": "Email",
                        "type": "input-email",
                        "placeholder": "请输入邮箱地址",
                        "name": "email"
                    }
                ]
            }
        ]
    };
}