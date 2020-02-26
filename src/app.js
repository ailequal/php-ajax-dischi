// import packages using npm
const $ = require('jquery');
const Handlebars = require("handlebars");

// wait for the html to fully load before executing any js
$(document).ready(function () {
	$.ajax({
		url: "http://localhost:8888/php-ajax-dischi/server.php",
		method: "GET",
		data: {
			// 'title': 'Plans',
		},
		success: function (data, state) {
			for (var i = 0; i < data.length; i++) {
				var album = data[i];
				var source = $('#template').html();
				var template = Handlebars.compile(source);
				var context = {
					title: album.title,
					author: album.author,
					year: album.year,
					path: album.poster,
				};
				var html = template(context);
				$('.albums').append(html);
			}
		},
		error: function (request, state, error) {
			console.log(error);
		}
	});
});
