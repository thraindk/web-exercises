<?php

echo "<table><tbody>\n";	# bsp. aus VL mit Aufbau Tabelle

for($i = 0; $i < 10; $i ++) {	# wie in Java
	echo "<tr><td>Zeile</td><td>" . ($i+1) . "</td></tr>\n";	# Das \n hier nur zur Verschönerung Konsolenausgabe!!
}

echo "</tbody></table>\n";

# break = gesamte for-Schleife verlassen
# continue = nur aktuellen Loop verlassen

$a = 0;

while($a < 10) {	# wie in java, auch do-while
	echo ".";
	$a++;
}

?>
