<?php

if(!array_key_exists("user", $_POST) || empty($_POST["user"]) || (!preg_match("/^[a-zA-Z]+$/", $_POST["user"]))) {
	header("location: index.html");
}

?>

<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<title>&Uuml;bung</title>
		<link rel="stylesheet" media="screen" type="text/css" href="./style.css" />
		<style>
		#text {
		font-family: Arial, sans-serif;
		font-size: 1.2em;
		}
		#error {
			color: red;
		}
		</style>
	</head>
	<body>
		<nav>
			<ul>
				<li><a href="https://www.google.de" target=_blank tabindex=1>Google</a></li>
				<li><a href="https://www.bing.de" target=_blank tabindex=2>Bing</a></li>
			</ul>
		</nav>
		<hr/>
		<h1 id="h1">Gr&ouml;&szlig;te &Uuml;berschrift</h1>
		
		<div id="text">
		<span style="font-weight: bold;">Lorem ipsum</span> dolor sit amet, <span style="text-decoration: underline;">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
		</div>
		<br/>
		<?php
		
		if(!array_key_exists("rolle", $_POST)) {
			echo "<p id=\"error\">Sie müssen eine Benutzerrolle wählen!</p>";
		}else{
		
		echo "<h2>Willkommen, " . $_POST["user"] . "!</h2>";
		
		$dbm = new PDO("mysql:host=localhost;dbname=meinedatenbank", "user", "1234");
		
		$stmt = $dbm->prepare("SELECT * FROM newsletter");
		
		$stmt->execute();
		
		while($row = $stmt->fetch()) {
			echo implode(" ", $row) . "<br/>";
		}
		
		}
		
		?>
	</body>

</html>