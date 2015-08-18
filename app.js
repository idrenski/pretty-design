/**
 * Created by idrenski on 8/17/2015.
 */
angular
    .module('DemoApp', ['ui.router', 'ngAnimate'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab1', {
                name: 'tab1',
                url: '/tab1',
                template: '<div class="tab tab1"><p>' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper nisl non tellus fringilla, non'+
                'maximus ligula molestie. Aliquam egestas, felis aliquet vestibulum aliquet, orci nunc euismod massa, in tempor'+
                'lacus mauris ac nisl. Curabitur luctus molestie ante, nec luctus mauris placerat ut. Nulla sodales erat id eros'+
                'congue elementum. Aliquam faucibus non neque eu mattis. Vivamus sit amet dolor eu dui pulvinar egestas interdum'+
                'quis enim. Etiam mattis cursus ipsum vel dapibus. In hac habitasse platea dictumst. Morbi consectetur magna id'+
                'risus consectetur, non ultricies quam bibendum. Quisque ac mi nec justo eleifend auctor et ac nibh. Etiam'+
                'ultrices viverra quam, in convallis nulla. Donec vitae aliquam odio, nec tincidunt tortor. Sed accumsan molestie'+
                'felis ac congue.' +
                '</p></div>'
            })

            .state('tab2', {
                name: 'tab2',
                url: '/tab2',
                template: '<div class="tab tab2"><p>' +
                'Mauris non placerat leo. Curabitur tincidunt rutrum semper. Vivamus dapibus tempus odio, quis dignissim metus' +
                'sodales sed. Fusce tempus fringilla libero, nec consequat tellus vestibulum non. Sed condimentum velit vel nisi' +
                'tincidunt vulputate. Phasellus nec mattis justo. Fusce semper, velit eu elementum gravida, diam erat imperdiet' +
                'dui, a vestibulum libero lorem nec ante. Duis sollicitudin posuere elit, non ultrices purus pharetra nec.' +'</p><p>'+
                'Maecenas ultrices felis quis scelerisque porttitor. Duis ultrices, lectus ut eleifend maximus, turpis nibh' +
                'sollicitudin quam, a aliquet ipsum purus nec erat. Nunc placerat erat vitae lorem vehicula, eget tincidunt ante' +
                'finibus. Curabitur tempor, metus sed tristique auctor, dolor lacus vestibulum magna, in fermentum est felis a' +
                'erat. Nam vestibulum ornare mauris non commodo. Sed rhoncus metus ac quam facilisis, varius vehicula arcu' +
                'gravida. In ut orci sed justo hendrerit bibendum. Nunc interdum metus felis, vitae euismod lorem vestibulum' +
                'feugiat.' +
                '</p></div>'
            })

            .state('tab3', {
                name: 'tab3',
                url: '/tab3',
                template: '<div class="tab tab3"><p>' +
                'Nulla sem lorem, varius quis varius eu, malesuada non est. Nunc vulputate aliquam ligula eu ullamcorper. Nunc' +
                'bibendum convallis dui sed laoreet. Vestibulum iaculis libero sem, a condimentum ligula efficitur ac. Proin' +
                'libero velit, ultricies id gravida vel, ultrices vitae sapien. Etiam magna sapien, laoreet ac feugiat nec,' +
                'tempor eget nibh. Integer venenatis tincidunt dui. In ut suscipit odio. Nullam ligula massa, finibus sit amet' +
                'enim sit amet, mattis mollis nunc. Nulla pellentesque neque vel odio blandit, finibus sodales libero gravida.' +
                'Suspendisse magna nisl, tristique vitae purus vel, vulputate tincidunt lectus. Cras ac nulla condimentum,' +
                'tristique eros vitae, condimentum elit. Curabitur in iaculis ligula. Aliquam laoreet semper pretium. Duis mattis' +
                'efficitur nibh, vel egestas dolor dictum dignissim. Morbi tincidunt, justo nec iaculis ornare, ex lectus' +
                'tincidunt elit, interdum accumsan libero velit vitae nunc.' +
                '</p></div>'
            })

            .state('tab4', {
                name: 'tab4',
                url: '/tab4',
                template: '<div class="tab tab4"><p>' +
                'Quisque ac ullamcorper nisl. Nulla porttitor euismod nulla, in scelerisque ligula elementum eu. Mauris a' +
                'vulputate sem. Curabitur imperdiet ante et magna laoreet semper. Duis sapien mi, sodales pretium pharetra non,' +
                'mattis non purus. Nullam porttitor eros quis metus egestas, eu molestie purus mattis. Duis euismod cursus' +
                'blandit. Proin rutrum ipsum ut orci gravida, eget vestibulum quam rutrum. Ut euismod arcu ut pharetra ornare.' +'</p><p>'+
                'Nullam vehicula sollicitudin turpis, in tempus nulla. Cras eu neque blandit, imperdiet diam quis, volutpat' +
                'metus. Vivamus dictum arcu eleifend euismod bibendum. Morbi nec massa sed metus pharetra consectetur. Class' +
                'aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nec hendrerit est,' +
                'non auctor eros.' +
                '</p></div>'
            });
    })

    .controller('DemoController', function ($scope, $window, $state) {
        $scope.transition = 'slide-left';
        $scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
        $scope.currentIndex = -1;
        $scope.maxIndex = $scope.tabs.length;
        $scope.left = false;

        next();

        function next() {
            $scope.currentIndex = $scope.currentIndex + 1 < $scope.maxIndex ? $scope.currentIndex + 1 : 0;
            var name = $scope.tabs[$scope.currentIndex];
            $state.go(name);
        }

        $scope.left = function () {
            $scope.transition = 'slide-left';
            next();
        }

        $scope.right = function () {
            $scope.transition = 'slide-right';
            next();
        }

        $scope.top = function () {
            $scope.transition = 'slide-top';
            next();
        }

        $scope.bottom = function () {
            $scope.transition = 'slide-bottom';
            next();
        }
    })
;