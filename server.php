<?php
	include 'database.php';
	// var_dump($database);
	header('Content-Type: application/json');
	echo json_encode($database);
	?>
