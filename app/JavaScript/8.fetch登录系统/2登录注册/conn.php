<?php
	$conn=mysqli_connect("localhost","root","","test");
	// test是库 （数据库）
	mysqli_set_charset($conn,"gbk_chinese_ci");
	if(!$conn)
		{
			exit("链接数据库失败！");
		}	
?>