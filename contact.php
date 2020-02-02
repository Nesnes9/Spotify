<!DOCTYPE html>
<html>

<head>
	<title>Spotify</title>
	<meta charset="utf-8">
	<meta name="description" content="Ma page Spotify">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/jquery-3.4.1.min.js"></script>
	<!--Import du jquery -->
	<script src="js/script.js"></script>
</head>

<body>
	<header>
		<div class="container clearfix">
			<a href="index.html" class="logo">
				<img src="images/logo.svg" alt="Spotify">
			</a>
			<nav>
				<ul>
					<li><a href="#">Premium</a></li>
					<li><a href="#">Aide</a></li>
					<li><a href="#">Télécharger</a></li>
					<li><a>|</a></li>
					<li><a href="contact.php">Contact</a></li>
				</ul>
			</nav>
		</div>
	</header>

	<main>
		<section id="section1">
			<div class="container clearfix">
				<div class="vertically-centered">
					<h1>Essayez Spotify Premium gratuitement pendant 3 mois</h1>
					<h2>Écoutez des millions de titres à la demande sans pubs et hors connexion.</h2>
					<a href="#" class="cta-button" onclick="showModal()">Voir les abonnements</a>
				</div>
				<small>Offre soumise à nos Conditions d'utilisation. Offre de trois mois gratuits réservée aux utilisateurs n'ayant jamais essayé Spotify Premium.</small>
			</div>
		</section>

		<!-- Formulaire de contact -->
		<section id="contact">
			<div class="container clearfix">
				<h1>Une question? Contactez-nous </h1>
				<form action="formulaire-contact.php" method="post">
					<div class="row">
						<div class="col-12">
							<h2>Nom *</h2>
							<input for="nom" type="text" id="nom" name="nom">
						</div>
						<div class="col-12">
							<h2>Prénom *</h2>
							<input type="text" name="prenom">
						</div>
						<div class="col-24">
							<h2>Adresse Email *</h2>
							<input for="email" id="email" type="text" name="email" class="input_plus">
						</div>
						<div class="col-24">
							<h2>Message *</h2>
							<textarea id="message" name="message" for="message" class="textarea_plus"></textarea>
						</div>
						<div class="col-24">
							<button type="submit" name="envoi" value="envoyer" class="cta-button">Envoyer</button>
						</div>
					</div>
				</form>
			</div>
		</section>


	</main>
	<footer>
		<div class="container clearfix">
			<nav>
				<ul>
					<li><a href="#">Légal</a></li>
					<li><a href="#">Cookies</a></li>
					<li><a href="#">A propos des pubs</a></li>
				</ul>
			</nav>
			<div class="vertically-centered align-right">
				<a href="#" class="country-france">France</a>
				<small>© 2020 Spotify AB</small>
			</div>
		</div>
	</footer>

</html>