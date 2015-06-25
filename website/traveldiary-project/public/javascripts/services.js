/**
 * Created by albert on 24.06.15.
 */

App.service('Util',function () {

    return {
        getKeywordString: (function (kws) {
        var result = '';

        kws.forEach( function (k) {
                if (result !== '') {
                    result += '+';
                }

                result += k.keyword;
            }
        );

        return result;
    })
}});
