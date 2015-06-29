/**
 * Created by albert on 24.06.15.
 */
(function() {

var App = angular.module("travelDiary");

App.service('Util', function () {

    return {
        getKeywordString: (function (kws) {
            var result = '';

            kws.forEach(function (k) {
                    if (result !== '') {
                        result += '+';
                    }

                    result += k.keyword;
                }
            );

            return result;
        })
    }
});

App.service('KeywordService', function () {

    var thisService = this;

    thisService.selectedKeywords = [];
    thisService.suggestedKeywords = [];

    thisService.filterKeywords = function (keywordsToFilter, filterList) {

        if (keywordsToFilter === undefined || filterList === undefined) {
            $log.error('Can\'t use undefined arguments: ' + keywordsToFilter + ", " + filterList);
        }

        return $.grep(keywordsToFilter, function (keyword) {
            return !containsKeyword(keyword, filterList);
        });
    };

    thisService.findMatchingKeywords = function (matchKeywords, keywordsToMatch) {
        if (matchKeywords === undefined || keywordsToMatch === undefined) {
            $log.error('Can\'t use undefined arguments: ' + keywordsToFilter + ", " + filterList);
        }

        return $.grep(matchKeywords, function (keyword) {
            return containsKeyword(keyword, keywordsToMatch);
        });
    }

    function containsKeyword(theKeyword, keywords) {
        if (theKeyword === undefined || keywords === undefined) {
            $log.error('Can\'t use undefined arguments:' + theKeyword + ", " + keywords);

            return false;
        }

        return $.grep(keywords, function (keyword) {
                return keywordEquals(keyword, theKeyword);
            }).length > 0;
    }

    function keywordEquals(keyword1, keyword2) {
        return keyword1.id === keyword2.id;
    }

    thisService.setSuggestedKeywords = function (newSuggestedKeywords) {
        if (newSuggestedKeywords === undefined) {
            $log.error('Can\'t set new keyword Suggestion' + newSuggestedKeywords);
        }

        // Filter out all already selected keywords
        if (thisService.selectedKeywords === undefined) {
            $log.error('Selected keywords undefined');
        } else {
            angular.copy(thisService.filterKeywords(newSuggestedKeywords, thisService.selectedKeywords), thisService.suggestedKeywords);
        }
    };

    thisService.setSelectedKeyWords = function (newSelectedKeywords) {

        console.log('Setting selected keywords' + newSelectedKeywords);

        angular.copy(newSelectedKeywords, thisService.selectedKeywords);

        // Filter out all already selected keywords from suggestions
        if (thisService.suggestedKeywords !== undefined) {
            angular.copy(thisService.filterKeywords(thisService.suggestedKeywords, thisService.selectedKeywords), thisService.suggestedKeywords);
        }
    };

    thisService.addKeywordToSelection = function (newKeyword) {

        console.log('Adding keyword ' + newKeyword);

        if (newKeyword != undefined) {
            if (!containsKeyword(newKeyword, thisService.selectedKeywords)) {
                thisService.selectedKeywords.push(newKeyword);

                // Filter out all already selected keywords
                angular.copy(thisService.filterKeywords(thisService.suggestedKeywords, thisService.selectedKeywords), thisService.suggestedKeywords);
            } else {
                console.log('Keyword' + newKeyword + "already contained in selection.")
            }

        } else {
            $log.error('Can\'t add keyword ' + newKeyword);
        }
    };

    thisService.removeKeywordFromSelection = function (removedKeyword) {

        console.log('Removing keyword ' + removedKeyword);

        if (removedKeyword !== undefined) {
            var result = thisService.filterKeywords(thisService.selectedKeywords, [removedKeyword]);

            console.log('Removing resulted in');

            console.log(result);

            if (result.length === thisService.selectedKeywords.length) {
                console.log('Keyword (' + removedKeyword + ') to remove from selected keywords is not in current selection.');
            } else {
                angular.copy(result, thisService.selectedKeywords);

                // Add it back to the suggestions TODO: Make this based on previous suggestions
                thisService.suggestedKeywords.push(removedKeyword);
            }
        } else {
            $log.error('Can\'t remove keyword ' + removedKeyword);
        }
    };

});

}());