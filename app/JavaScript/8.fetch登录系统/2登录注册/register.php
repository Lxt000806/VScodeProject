<?php 
   include "conn.php";
   $username=$_POST['username'];
   $password=$_POST['password'];

   $query=mysqli_query($conn,"SELECT * FROM admin WHERE user='{$username}';");
   $row=mysqli_fetch_assoc($query);

   $arrays = array('one'=>'namerepeat','two'=>'success');
  
   if($row)
   {

      echo json_encode($arrays['one']);
   }
   else
   {
    $insert=mysqli_query($conn,"INSERT INTO admin VALUES ('{$username}','{$password}');");
       if($insert)
       {
         echo json_encode($arrays['two']);
       } 
   }
 ?>