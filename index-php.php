<?php
	include './database.php';
	// var_dump($database);
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./dist/app.css">
	<title>php-ajax-dischi</title>
</head>

<body>
	<header>
		<div class="nav-bar container-fluid">
			<div class="container">
				<ul>
					<li class="logo">
						<a href="#"><img src="./img/logo.svg" alt="logo.svg"></a>
					</li>
					<li>
						<span>index-php.php - PHP Version</span>
					</li>
				</ul>
			</div>
		</div>
	</header>
	<main>
		<div class="albums container">
			<?php foreach ($database as $album) { ?>
				<?php
					$poster = $album['poster'];
					$title = $album['title'];
					$author = $album['author'];
					$year = $album['year'];
				?>
				<div class="album">
					<img class="poster" src="<?php echo $poster ?>" alt="<?php echo $title ?>">
					<h2 class="title"><?php echo $title ?></h2>
					<h3 class="author"><?php echo $author ?></h3>
					<span class="year"><?php echo $year ?></span>
				</div>
			<?php } ?>
		</div>
	</main>
	<footer>
		<div class="info container fluid">
			<div class="container">
				<h6 class="copyright">ailequal</h6>
			</div>
		</div>
	</footer>
</body>

</html>