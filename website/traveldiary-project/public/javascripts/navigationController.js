/**
 * Created by albert on 24.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.controller('navigationController',
    ['Util', 'KeywordService', '$scope', '$state', '$log', 'keywords', 'selectedKeywords',
        function (Util, KeywordService, $scope, $state, $log, injectedKeywords, injectedSelectedKeywords) {

            // Use alias to avoid scope clashes
            var thisCtrl = this;

            // Private list of all keywords.
            var keywords = injectedKeywords;

            // Private, but shared, keyword service.
            var keywordService = KeywordService;

            keywordService.setSelectedKeyWords(injectedSelectedKeywords);
            keywordService.setSuggestedKeywords(keywords);

            thisCtrl.selectedKeywords = keywordService.selectedKeywords;
            thisCtrl.suggestedKeywords = keywordService.suggestedKeywords;

            function loadResultPage() {
                console.log('Loading page with keywords');
                console.log(thisCtrl.selectedKeywords);

                var keyStrings = Util.getKeywordString(thisCtrl.selectedKeywords);

                if (keyStrings.trim() !== '') {
                    $state.go('main.vacation.search', {keywordStrings: keyStrings});
                } else {
                    $state.go('main.vacation');
                }
            }

            thisCtrl.clickRegister = function () {
                $state.go('main.register');
            };

            thisCtrl.clickLogin = function () {
                $state.go('main.login');
            };

            // Search input
            thisCtrl.isDisabled = false;
            thisCtrl.noCache = true;
            thisCtrl.autofocus = true;
            thisCtrl.autoselect = true;
            thisCtrl.budget = 125;
            thisCtrl.showSuggestions = true;
            thisCtrl.searchText = undefined;
            thisCtrl.selectedKeyword = undefined;

            thisCtrl.toggleSuggestions = function () {
                thisCtrl.showSuggestions = !thisCtrl.showSuggestions;
            }

            thisCtrl.addKeyword = function (keyword) {
                keywordService.addKeywordToSelection(keyword);

                thisCtrl.searchText = '';

                loadResultPage();
            };

            thisCtrl.removeKeyword = function (keyword) {
                keywordService.removeKeywordFromSelection(keyword);

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
    ['keywords', '$controller', '$scope',
        function (keywords, $controller, $scope) {
            $controller('navigationController as navCtrl', {$scope: $scope, keywords: keywords, selectedKeywords: []});
        }]);

App.controller('navigationControllerWithSelection',
    ['keywords', '$controller', '$scope', 'selectedKeywords',
        function (keywords, $controller, $scope, selectedKeywords) {
            $controller('navigationController as navCtrl', {
                $scope: $scope,
                keywords: keywords,
                selectedKeywords: selectedKeywords
            });
        }]);
}());