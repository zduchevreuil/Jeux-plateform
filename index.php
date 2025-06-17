<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="style.css"/>
  <title>Carré Bros en JS</title>
  <style>
    canvas { background: #eef; display: block; margin: auto; }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="800" height="600"></canvas>
  <script src="game.js"></script>
  <h1 class="sco">score : <span  class="score"></span></h1>
  <h1 class="time">timer : <span class="timer"></span> min</h1>
  <h1 class="modial_score">Best score modial : <span class="best_score"><?php echo "100";?></span></h1>
</body>
</html>
<script src="index.js"></script>
<script src="score.js"></script>
<script src="timer.js"></script>
<script src="plateforms/plateform_1.js"></script>
<script src="plateforms/plateform_2.js"></script>

<?php
// Créer une base de données pour stocker les scores

?>