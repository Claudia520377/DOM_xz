
(function(){ //避免全局变量造成全局污染
    ajax({
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json", // 自动JSON.parse()
    })  //open(    res  )
        //  ↓       ↓
    .then(function(data){
        //data形参接住了ajax抛出的服务器端返回的数据对象
        console.log(data);
        //后续操作
    })
})()