var reminderApp = angular.module('reminderApp', []);

reminderApp.controller('reminderList', function( $http ) {
    this.reminders = [{
        name: "Test reminder",
        increment: "hour",
        meta: {
            start: "9:00 AM",
            end: "5:00 PM"
        }

    }, {
        name: "Go for a jog",
        increment: "day",
        meta: {
            time: "9:00 AM"
        }
    }, {
        name: "vaccuum",
        increment: "week",
        meta: {
            time: '8:00 AM',
            day: 'Sunday'
        }
    }, {
        name: "Check oil",
        increment: "month",
        meta: {
            day: "1",
            time: "10:00 AM"
        }
    }, {
        name: "Clean Furnace",
        increment: "year",
        meta: {
            month: "March",
            day: 3,
            time: "9:00 AM"
        }
    }];
    // $http({
    //     method: "GET",
    //     url: "./api/reminders"
    // }).then(
    //     function success(response) {
    //
    //     },
    //     function error( response) {
    //
    //     }
    // );
});

reminderApp.filter('ordinal', function() {
    return function(input) {
        var s=["th","st","nd","rd"],
        v=input%100;
        return input+(s[(v-20)%10]||s[v]||s[0]);
    }
});
