
    x = 0  
    y = 0  
      
    function count1( )  
    {　
        x = x+ 1  
        document.getElementById("box1").value= x  
        meter1=setTimeout("count1()", 1000)  
    }
     
    function count2( )
    {　
        y = y+ 1  
        document.getElementById("box2").value= y  
        meter2=setTimeout("count2()", 1000)  
    }  
    // 执行函数
    count1( )  
    count2( )