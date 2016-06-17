HealthStateConfig.$inject = ['$stateProvider'];

export function HealthStateConfig($stateProvider) {
    $stateProvider.state('<%=jhiPrefix%>-health', {
        parent: 'admin',
        url: '/health',
        data: {
            authorities: ['ROLE_ADMIN'],
            pageTitle: 'health.title'
        },
        views: {
            'content@': {
                templateUrl: 'app/admin/health/health.html',
                controller: '<%=jhiPrefixCapitalized%>HealthCheckController',
                controllerAs: 'vm'
            }
        },
        resolve: {
            translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                $translatePartialLoader.addPart('health');
                return $translate.refresh();
            }]
        }
    });
}
