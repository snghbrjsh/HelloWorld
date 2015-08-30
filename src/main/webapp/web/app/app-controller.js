define([ 'jquery', 'can', 'app/app-model' ], function($, can, Model) {
    can.Component.extend({
        tag : 'itranslate',
        template : can.view('app/app-content.mustache'),
        viewModel : {
            appdetails : [],
            init : function() {
                var scope = this;
                can.$('#spinner').addClass('enable-spinner');
                Model.findAll({}, function(data) {
                    can.$('#spinner').removeClass('enable-spinner');
                    can.route('HelloWorld/:section');
                    can.route('HelloWorld/:section/:subSection');
                    can.route.ready();
                    if (!can.route.attr('section')) {
                        can.route.attr('section', 'home');
                    }

                    scope.attr('appdetails', data);
                }, function(e) {
                    can.$('#spinner').removeClass('enable-spinner');
                    scope.attr('appdetails', []);
                });
            },
        },
        events : {
            'div.global-nav a click' : function(el, ev) {
                ev.preventDefault();
                var tab = can.$(el).attr('href');
                console.log(tab);
                can.route.attr('section', can.$(el).attr('href').substr(1));
            },

            '{can.route} section' : function(route, evt, newVal, oldVal) {
                can.$('div.global-nav a').each(function() {
                    var tabName = $(this).attr('href').substr(1);
                    if (tabName === newVal) {
                        $('#' + tabName).fadeIn('slow');
                        $(this).parent().addClass('active');
                    } else {
                        $('#' + tabName).hide();
                        $(this).parent().removeClass('active');
                    }
                });
            }
        }
    });
});
