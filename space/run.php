<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title></title>
  <style>
  .console{
    padding-top:10px;
    margin: 10px;
  background-color:#505B69;
  position:absolute;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: auto;
}

body::-webkit-scrollbar {
    display: none;
    }
  </style>
  <script  src="js/jquery-1.9.1.js"></script>
  <script>
  function randomizze(a,b){
    return Math.floor((Math.random()*(b-a))+a);
}
</script>

<script>

function update()
{
    <?php
        echo $_POST['update'];
    ?>

}

</script>

</head>

<body>

    <script>

$(function(){
    <?php
        echo $_POST['tmake'];
    ?>
});

  <?php
        echo $_POST['jscode'];
  ?>
  </script>
  <div class="debuger"></div>
  <div class="console"></div>
</body>

</html>