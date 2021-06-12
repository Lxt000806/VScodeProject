<?php 
  include "conn.php";
  $id=$_GET["id"];
  $start_id=$id*10-10;
  $arr=array();
  $query=mysqli_query($conn,"SELECT * FROM student LIMIT {$start_id},10");
  if(!$query)
  {
    exit("查询失败!");    
  }
  while($row=mysqli_fetch_assoc($query))
  {
   array_push($arr,$row);
  }
  if($arr)
  {
    $myjson=json_encode($arr);
    echo($myjson);
  }
  else
  {
    echo "查无数据！";
  }
 ?>