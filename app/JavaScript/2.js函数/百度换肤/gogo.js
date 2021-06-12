//匀速版
function gogo(obj,speed,target,attr,attr2)
  {     
        //使用setInterval之前
        // 先习惯性清楚一次timer
        clearInterval(timer)
        timer=setInterval(go,20)
        function go(){  
          obj.style[attr]=parseInt(window.getComputedStyle(obj)[attr])+speed+"px" 
          
          obj.style[attr2]=parseInt(window.getComputedStyle(obj)[attr2])+speed+"px"
          if(parseInt(obj.style[attr])==target)
          {          
            clearInterval(timer)
          }
        }
  }

//步长计算方法(匀减速版)
function gogo(obj,target,attr)
{     
  /*
      obj对象位置=当前位置+步长
      步长=(target-当前位置)/比例

      Math.ceil  向上取整
      Math.floor 向下取整
      
  */
      
      clearInterval(timer)
      timer=setInterval(go,20)
      function go(){  

        let step = (target-parseInt(window.getComputedStyle(obj)[attr]))/10
        step = step>0?Math.ceil(step):Math.floor(step);
        obj.style[attr] = parseInt(window.getComputedStyle(obj)[attr])+step+"px" 
        
        if(step==0)
        {          
          clearInterval(timer)
        }
      }
}