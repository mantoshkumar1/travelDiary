/**
 * Created by albert on 24.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.factory('AuthOutService', [ '$http', function ($http) {

        var authOutService = {
            logout:logout
        };

        return authOutService;

        function logout() {
            return $http
                .post('/api/logout')
                .then(function () {
                    console.log("User logged out.");
                });
        };
    }]);

App.controller('navigationController',
    ['Util', 'SearchService', '$scope', '$state', '$log', 'keywords', 'selectedKeywords', 'maxVacationBudget',
        'maxActivityBudget','AuthOutService','$rootScope', '$sessionStorage',
        function (Util, SearchService, $scope, $state, $log, injectedKeywords, injectedSelectedKeywords,maxVacationBudget,
                  maxActivityBudget, AuthOutService, $rootScope, $sessionStorage) {

            // Use alias to avoid scope clashes
            var thisCtrl = this;

            // Private list of all keywords.
            var keywords = injectedKeywords;

            // Private, but shared, keyword service.
            var searchService = SearchService;

            if ($state.includes('main.activity')) {
                searchService.budgetContainer.currentBudget = $sessionStorage.currentBudget ? $sessionStorage.currentBudget : maxActivityBudget;
                thisCtrl.maxBudget = maxActivityBudget;
            } else {
                searchService.budgetContainer.currentBudget = $sessionStorage.currentBudget ? $sessionStorage.currentBudget : maxVacationBudget;
                thisCtrl.maxBudget = maxVacationBudget;
            }


            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    console.log(fromState.name);
                    console.log(toState.name);

                    if (fromState.name.indexOf('main.activity') === 0 && toState.name.indexOf('main.vacation') === 0) {
                        $sessionStorage.currentBudget = null;
                        thisCtrl.maxBudget = maxVacationBudget;
                        searchService.budgetContainer.currentBudget = maxVacationBudget;
                    } else if (fromState.name.indexOf('main.vacation') === 0 && toState.name.indexOf('main.activity') === 0) {
                        $sessionStorage.currentBudget = null;
                        thisCtrl.maxBudget = maxActivityBudget;
                        searchService.budgetContainer.currentBudget = maxActivityBudget;
                    } else {
                        console.log('Saving session budget.');

                        $sessionStorage.currentBudget = searchService.budgetContainer.currentBudget;
                    }
                }
            );

            thisCtrl.budgetContainer = SearchService.budgetContainer;


            searchService.setSelectedKeyWords(injectedSelectedKeywords);
            searchService.setSuggestedKeywords(keywords);

            thisCtrl.selectedKeywords = searchService.selectedKeywords;
            thisCtrl.suggestedKeywords = searchService.suggestedKeywords;

            function loadResultPage() {
                console.log('Loading page with keywords');
                console.log(thisCtrl.selectedKeywords);

                var keyStrings = Util.getKeywordString(thisCtrl.selectedKeywords);

                if (keyStrings.trim() !== '') {
                    if ($state.includes('main.activity')) {
                        $state.go('main.activity.search', {keywordStrings: keyStrings});
                    } else {
                        $state.go('main.vacation.search', {keywordStrings: keyStrings});
                    }
                } else {
                    if ($state.includes('main.activity')) {
                        $state.go('main.activity');
                    } else {
                        $state.go('main.vacation');
                    }
                }
            }

            thisCtrl.clickRegister = function () {
                $state.go('main.register');
            };

            thisCtrl.clickLogin = function () {
                $state.go('main.login');
            };

            thisCtrl.goToHome = function () {
                $state.go('main.index');
            };

            thisCtrl.userLogout = function () {
                AuthOutService.logout().then(function(){
                    $scope.wipeSession();
                    $state.go('main.index');
                })
            }

            // Search input
            thisCtrl.isDisabled = false;
            thisCtrl.noCache = true;
            thisCtrl.autofocus = true;
            thisCtrl.autoselect = true;
            thisCtrl.showSearchDetails = $sessionStorage.showSearchDetails || false;
            thisCtrl.searchText = undefined;
            thisCtrl.selectedKeyword = undefined;

            thisCtrl.toggleSuggestions = function () {
                thisCtrl.showSearchDetails = !thisCtrl.showSearchDetails;

                $sessionStorage.showSearchDetails = thisCtrl.showSearchDetails;

            }

            thisCtrl.addKeyword = function (keyword) {
                searchService.addKeywordToSelection(keyword);

                thisCtrl.searchText = '';

                loadResultPage();
            };

            thisCtrl.removeKeyword = function (keyword) {
                searchService.removeKeywordFromSelection(keyword);

                loadResultPage();
            };

            function createKeywordFilter(searchText) {
                var lowerCaseSearchText = angular.lowercase(searchText);
                return function (keyword) {
                    var lowerCaseKeyword = angular.lowercase(keyword.keyword);
                    return (lowerCaseKeyword.indexOf(lowerCaseSearchText) === 0);
                }
            };

            thisCtrl.getFilteredKeywords = function (searchText) {
                var results = searchText ? keywords.filter(createKeywordFilter(searchText)) : keywords;

                return results;
            };

            thisCtrl.onSearchBarFocus = function () {
                thisCtrl.showSuggestions = true;
            };

            thisCtrl.onSearchBarBlur = function () {
                thisCtrl.showSuggestions = false;
            };
        }
    ]);

App.controller('navigationControllerWithoutSelection',
    ['keywords', '$controller', '$scope','maxVacationBudget', 'maxActivityBudget',
        function (keywords, $controller, $scope, maxVacationBudget, maxActivityBudget) {
            $controller('navigationController as navCtrl', {
                $scope: $scope,
                keywords: keywords,
                selectedKeywords: [],
                maxVacationBudget: maxVacationBudget,
                maxActivityBudget: maxActivityBudget});
        }]);

App.controller('navigationControllerWithSelection',
    ['keywords', '$controller', '$scope', 'selectedKeywords', 'maxVacationBudget', 'maxActivityBudget',
        function (keywords, $controller, $scope, selectedKeywords, maxVacationBudget, maxActivityBudget) {
            $controller('navigationController as navCtrl', {
                $scope: $scope,
                keywords: keywords,
                selectedKeywords: selectedKeywords,
                maxVacationBudget: maxVacationBudget,
                maxActivityBudget: maxActivityBudget
            });
        }]);
}());