<!DOCTYPE html>
<html lang="pt-br" class="no-js">
	<head>
		<!-- Metas -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- Favicons -->
		<link rel="apple-touch-icon" sizes="57x57" href="img/favicons/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="img/favicons/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="img/favicons/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="img/favicons/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="img/favicons/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="img/favicons/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="152x152" href="img/favicons/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" href="img/favicons/favicon-32x32.png" sizes="32x32">
		<link rel="icon" type="image/png" href="img/favicons/favicon-96x96.png" sizes="96x96">
		<link rel="icon" type="image/png" href="img/favicons/favicon-160x160.png" sizes="160x160">
		<meta name="msapplication-TileColor" content="#333333">
		<meta name="msapplication-TileImage" content="img/favicons/mstile-144x144.png">

		<!-- Title -->
		<title>{{ config.title }}</title>

		<!-- Style -->
		<link rel="stylesheet" href="css/style.css">

		<!-- Style IE -->
		<!--[if IE]><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css"><![endif]-->

		<!-- Script IE -->
		<!--[if IE]><script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script><![endif]-->

		<!-- SEO Verification -->
		<meta name="google-site-verification" content="j-TKulhL3nacPi5dl8dv2xxB1CoPQhYGqebcLFboA0s">

		<!-- SEO Generic -->
		<meta name="author" content="{{ config.author }}">
		<meta name="description" content="{{ config.description }}">
		<meta name="keywords" content="{{ config.keywords }}">
		<meta name="robots" content="index, follow">

		<!-- SEO Facebook -->
		<meta property="og:locale" content="pt_BR">
		<meta property="og:type" content="website">
		<meta property="og:url" content="{{ config.url }}">
		<meta property="og:site_name" content="{{ config.title }}">
		<meta property="og:title" content="{{ config.title }}">
		<meta property="og:description" content="{{ config.description }}">
		<meta property="og:image" content="img/social.jpg">
		<meta property="og:image:type" content="image/jpeg">
		<meta property="og:image:width" content="800">
		<meta property="og:image:height" content="600">
		<meta property="article:publisher" content="FACEBOOK">
		<meta property="article:author" content="{{ config.author }}">
		<meta property="article:section" content="{{ config.description }}">
		<meta property="article:tag" content="{{ config.keywords }}">

		<!-- SEO Google+ -->
		<link rel="canonical" href="">
		<link rel="publisher" href="GOOGLE +++">

		<!-- SEO Twitter -->
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:domain" content="{{ config.url }}">
		<meta name="twitter:site" content="{{ config.title }}">
		<meta name="twitter:title" content="{{ config.title }}">
		<meta name="twitter:description" content="{{ config.description }}">
		<meta name="twitter:creator" content="{{ config.author }}">
		<meta name="twitter:image:src" content="img/social.jpg">
	</head>

	<body>

		<!--[if lt IE 9]>
			<div id="browse-update">Você está usando um navegador desatualizado. Por favor <a href="http://www.whatbrowser.org/intl/pt-BR/" target="blank">atualize seu navegador</a> para ter uma mehor experiência.</div>
			<script>
				var e = ("abbr,article,aside,figure,footer,header,main,nav,section").split(',');
				for (var i = 0; i < e.length; i++) { document.createElement(e[i]); }
			</script>
		<![endif]-->

		<!-- SVG Icons -->
		<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
		    <symbol id="icon-angle-down" viewBox="0 0 658 1024">
		    	<title>angle-down</title>
		    	<path d="M614.286 420.571q0 7.429-5.714 13.143l-266.286 266.286q-5.714 5.714-13.143 5.714t-13.143-5.714l-266.286-266.286q-5.714-5.714-5.714-13.143t5.714-13.143l28.571-28.571q5.714-5.714 13.143-5.714t13.143 5.714l224.571 224.571 224.571-224.571q5.714-5.714 13.143-5.714t13.143 5.714l28.571 28.571q5.714 5.714 5.714 13.143z"></path>
		    </symbol>

		    <symbol id="icon-angle-up" viewBox="0 0 658 1024">
		    	<title>angle-up</title>
		    	<path d="M614.286 676.571q0 7.429-5.714 13.143l-28.571 28.571q-5.714 5.714-13.143 5.714t-13.143-5.714l-224.571-224.571-224.571 224.571q-5.714 5.714-13.143 5.714t-13.143-5.714l-28.571-28.571q-5.714-5.714-5.714-13.143t5.714-13.143l266.286-266.286q5.714-5.714 13.143-5.714t13.143 5.714l266.286 266.286q5.714 5.714 5.714 13.143z"></path>
		    </symbol>
		</svg>

		<!-- =header -->
		<header id="header" class="header">
			<a class="skip-content" href="#body">Pular para o conteúdo principal</a>

			<h1 class="logo animation fade-in-down">
				<img class="symbol animation fade-in-down" src="img/logo.svg" alt="Logo do site Vitor Melo" width="300" height="186" onerror="this.src='img/logo.png'; this.onerror=null;">
				<img class="type animation fade-in-down" src="img/type.svg" alt="Fonte do site Vitor Melo" width="300" height="29" onerror="this.src='img/type.png'; this.onerror=null;">
				<div class="jobtitle animation fade-in-up">Design de Interfaces</div>
			</h1>

			<a class="to-content animation fade-in-up" href="#about">
				<span class="text-hide">Ir para o conteúdo</span>
				<svg class="icon icon-angle-down"><use xlink:href="#icon-angle-down"></use></svg>
			</a>

			<canvas id="header-canvas" class="animation fade-in-up"></canvas>
			<div class="header-overlay"></div>
		</header>

		<main id="main" class="main">
