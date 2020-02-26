// import packages using npm
const $ = require('jquery');
const Handlebars = require("handlebars");

// wait for the html to fully load before executing any js
$(document).ready(function () {
	// ajax call for inserting all the albums
	$.ajax({
		url: "http://localhost:8888/php-ajax-dischi/server.php",
		method: "GET",
		data: {
			'author': 'All',
		},
		success: function (data, state) {
			for (var i = 0; i < data.length; i++) {
				var album = data[i];
				var template = handlebarsInit('#template');
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

	// store author option variable
	var option = $('#author').val();
	console.log(option);

	// when the author is changed the album are changed
	$(document).on('change', '#author', function () {
		// author option is updated
		option = $(this).val();
		console.log(option);
		$.ajax({
			url: "http://localhost:8888/php-ajax-dischi/server.php",
			method: "GET",
			data: {
				'author': option,
			},
			success: function (data, state) {
				$('.albums').text('');
				for (var i = 0; i < data.length; i++) {
					var album = data[i];
					var template = handlebarsInit('#template');
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
});

// function
// handlebars init
function handlebarsInit(template) {
	var source = $(template).html();
	var template = Handlebars.compile(source);
	return template;
}
