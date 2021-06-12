window.onload=function()
{
    var login_btn=document.querySelector(".tijiao");
    var loginName=document.querySelector("#loginName");
    var passWord=document.querySelector("#passWord");
    login_btn.onclick=function()
    {
        if (loginName.value == "" || passWord.value == "")
        {
            alert("请输入完整的用户名或者密码！")
        }
        //定义json
        var json=
            {
            "zhanghu":loginName.value,
            "mima":passWord.value,
            }
        var datas=new FormData();
        for(var key in json)
        {
            datas.append(key,json[key])
        }
        fetch("login.php",
            {
            method:"post",
            mode:"no-cors",
            body:datas,
            })
            .then(response=>response.text())
            .then(data=>console.log(data))

    }

}