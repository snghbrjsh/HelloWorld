require.config({
    paths : {
        jquery : 'common/lib/jquery-2.1',
        can : 'common/lib/can.custom',
        basePath : '../web'
    },

    shim : {
        jquery : {
            exports : '$'
        },

        can : {
            deps : [ 'jquery' ],
            exports : 'can'
        }
    }
});

require([ 'jquery', 'basePath/app/app-controller' ], function($, App) {
    'use strict';
    can.$('#main').append(can.view.mustache('<itranslate/>')({}));
});
