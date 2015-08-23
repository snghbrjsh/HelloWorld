define([ 'jquery', 'can', 'app/fixtures/app-fixture' ], function($, can) {
    return can.Model.extend({
        id : 'dsid',

        parseModels : function(data) {
            if (data.appList) {
                data = data.appList;
            } else {
                data = [];
            }

            return data;
        },

        findAll : function() {
            return can.$.ajax({
                url : '/services/fetchApplicationDetails',
                type : 'GET',
                dataType : 'json',
                success : function(data) {
                    console.log('application Data received');
                    return data;
                }
            })
        }
    }, {});
})
