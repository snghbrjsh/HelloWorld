define([ 'jquery', 'can' ], function($, can) {
    can.fixture.delay = 1000;

    can.fixture({
        'GET /services/fetchApplicationDetails' : function(data) {
            return {
                appList : [ {
                    name : 'CMA3',
                    dsid : 1235432312
                }, {
                    name : 'RRSAdmin',
                    dsid : 346832135
                }, {
                    name : 'RRSServices',
                    dsid : 3548458668
                }, {
                    name : 'JV',
                    dsid : 98415835
                } ]
            };
        }
    });
});
