<?php 
   include "conn.php";
   $username=$_POST['username'];
   $password=$_POST['password'];
   $query=mysqli_query($conn,"SELECT * FROM admin WHERE user='{$username}';");
   $row=mysqli_fetch_assoc($query);

   $arrays = array('one'=>'nameerror','two'=>'passworderror','three'=>'success');

   if(!$row)
   {

      echo json_encode($arrays['one']);
   }
   else
   {
      $passval = $row['password'];

      if($passval!=$password)
         {
            echo json_encode($arrays['two']);
         }
      else
      {
         echo json_encode($arrays['three']);
      }

   }
 ?>