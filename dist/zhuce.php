<?php
	header('content-type:text/html;charset=utf8');
	$connect = mysqli_connect('localhost','root','root','user',3306);
	if(mysqli_connect_error()){
		die('数据库连接错误');
	}
	$username = $_POST['username'];//用命名
	$password = $_POST['password'];//密码
	//获取请求参数和主体的数组:$_POST,$_GET,$_REQUEST
	
	//把用户插入数据库
	$sql = "INSERT INTO info (username,password) VALUES ('$username','$password')";
	$result = mysqli_query($connect,$sql);
	if($result){
		//如果注册成功,为了下次可以直接登陆,给你发个通信证:cookie
		setcookie("username",$username,time()+96*60*60);
		setcookie("password",$password,time()+96*60*60);
		echo $username."注册成功";
	}else{
		echo '注册失败';
	}
	
	

?>









