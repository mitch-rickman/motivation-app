import angular from 'angular';

var reminderApp = angular.module('reminderApp', []);

reminderApp.controller('reminderList', function() {

    this.reminders = [
        {
            name: "Test reminder",
            timeframe: {
                increment: "hour",
                start: "9:00 AM",
                end: "5:00 PM"
            },

        },
        {
            name: "Go for a jog",
            timeframe: {
                increment: "day",
                start: "9:00 AM",
                end: "5:00 PM"
            },

        }
    ];
})
