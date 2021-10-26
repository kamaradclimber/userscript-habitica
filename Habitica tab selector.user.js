// ==UserScript==
// @name         Habitica tab selector
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatically select proper tabs when opening habitica
// @author       kamaradclimber
// @match        https://habitica.com/
// @license      Apache-2.0
// @icon         https://www.google.com/s2/favicons?domain=habitica.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var onTabAvailable = function (resolve) {
        var filter = "div.filter";
        var filters = document.querySelectorAll(filter);
        if (filters && 0 < filters.length) {
            filters.forEach(function(filter) {
                resolve(filter)
            })
        } else {
            window.setTimeout(function () {
                console.log("Filters not visible, relaunching timer");
                onTabAvailable(resolve);
            }, 100);
        }
    }

    onTabAvailable(function(filter) {
        switch(filter.innerText) {
            case "Due":
            case "Scheduled":
                filter.click();
                break;
        }
    })

    })();
