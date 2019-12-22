<?if(!defined("PROLOG_INCLUDED") || !PROLOG_INCLUDED) include_once($_SERVER["DOCUMENT_ROOT"]."/core/prolog.php");?>
<head class="no-js" lang="ru">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?=$sectionParams['title']?></title>
    <meta name="description" content="<?=$sectionParams['description']?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="<?=attach_file(DEFAULT_CSS_PATH)?>">
    <link rel="stylesheet" href="<?=attach_file(CSS_FOLDER."/normalize.css")?>">
    <link href="//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&amp;subset=cyrillic-ext" rel="stylesheet">
    <link rel="stylesheet" href="<?=attach_file(JS_FOLDER."/fancybox/source/jquery.fancybox.css")?>" type="text/css" media="screen" />

    <link rel="stylesheet" href="<?=attach_file(CSS_FOLDER."/hooks.css")?>">
    <script src="<?=attach_file(JS_FOLDER."/vendor/modernizr-2.8.3.min.js")?>"></script>   
    <script type='text/javascript' src='<?=attach_file(JS_FOLDER."/select.js")?>'></script>   
</head>
<body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
  <!------------------- Хедер 0 ---------------->
  <header class="head0">
     <div class="header0 container clearfix ">
     
     <span class="hd0-adr">
       Офис: пн-пт, 9:00-17:00; Склад: пн-пт, 9:00-16:00
     </span>
     
     <span class="hd0-tel">
       <a href="/tel:+79999999999"> +7 (999) <span>999-99-99</span></a>
       <a href="/tel:+79999999999"> +7 (999) <span>999-99-99</span></a>
     </span>
     
     <a class="hd0_mail" href="mailto:info@domain.ru">info@domain.ru</a>   
    
     </div>  
   </header>      
  <!------------------- Хедер 1 ---------------->  
   <header class="head1">
      <div class="header1 container clearfix">
        <div class="head-logo"> 
          <a href="/"></a>
          <p>brand byline</p> 
        </div>       
       
        <div class="head-menu">
          <ul class="menu0">
            <li class="dropmenu"><a href="/">Раздел 1</a>
              <ul class="submenu">
                <li><a href="">Вариант 1</a></li>
                <li><a href="">Вариант 2</a></li>
              </ul>
            </li>
            <li><a href="/">Раздел 2</a></li>
            <li><a href="/">Раздел 3 </a></li>
            <li><a href="/">Раздел 4 </a></li>
            <li><a href="/">Раздел 5</a></li>
            <li class="act0"><a href="/manager">Админка</a></li>                    
          </ul>       
        </div>
        
        <div class="head-btn">
          <a href="#id_callback" class="a_callback"></a>
        </div>        
      </div>  
 
    </header>  
 
  <!------------------- Внутренние ----------------> 
 <div class="inner-page clearfix">
  <div class="container inner">    
    <h1><?=$sectionParams['h1']?></h1>