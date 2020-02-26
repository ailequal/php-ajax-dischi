<?php
	include 'database.php';
	// var_dump($database);

	// get the author selection
	$author = $_GET['author'];
	// var_dump($author);

	// check the database with the get request if there's a match
	$personalDatabase = [];
	// all authors
	if ($author === 'All') {
	header('Content-Type: application/json');
	echo json_encode($database);
	} else {
		foreach ($database as $album) {
			// only selected authors
			if ($author === $album['author']) {
				$personalDatabase[] = $album;
			}
		}
		header('Content-Type: application/json');
		echo json_encode($personalDatabase);
	}
?>
