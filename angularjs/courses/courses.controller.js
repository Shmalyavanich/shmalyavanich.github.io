(function() {
	"use strict";

	angular
		.module("users")
		.controller("Courses", Courses);

	Courses.$inject = ['$location', '$stateParams'];

	function Courses($location, $stateParams) {
		var $ctrl = this;

		// $ctrl.courseData = {
		// 	courseCode: $stateParams.id
		// 	about: "This very importan course about nothing",
		// 	eventStatus: "http://schema.org/EventCancelled",
		// 	addressLocality: "Moscow",
		// 	postalCode: "000000",
		// 	streetAddress: "Butovo 2222",
		// 	name: "Big useful nothing course",



			// <script type="application/ld+json">
			// {
			// 	"@context": "http://schema.org/",
			// 	"@id": "./",
			// 	"@type": "Course",
			// 	"name": "HNC Accounting",
			// 	"description": "This course is designed for those wishing to take up \r\n       a career in Accounting and Financial Administration within a range of \r\n       organisations....",
			// 	"hasCourseInstance": [
			// 		{
			// 			"@type": "CourseInstance",
			// 			"courseMode": "part-time",
			// 			"endDate": "2017-06-21",
			// 			"location": "St Brycedale Campus Kirkcaldy",
			// 			"startDate": "2016-08-31"
			// 		},
			// 		{
			// 			"@type": "CourseInstance",
			// 			"courseMode": "full-time",
			// 			"endDate": "2017-06-23",
			// 			"location": "Halbeath Campus Dunfermline",
			// 			"startDate": "2016-08-29"
			// 		},
			// 		{
			// 			"courseMode": "full-time",
			// 			"endDate": "2017-06-23",
			// 			"location": "St Brycedale Campus Kirkcaldy",
			// 			"startDate": "2016-08-29"
			// 		}
			// 	]
			// }
			// </script>
		// };

		// console.log();
		if ($stateParams.id == 99) {
			$ctrl.courseData.eventStatus = "http://schema.org/EventCancelled";
		}

	}

})();