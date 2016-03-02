<?php
2 /*getmurata.php*/
3 require_once("dataget.php");
4 $data = data_get($GET['url']);
5 header("Access-Control-Allow-Origin: *");
6 print $data;
?>