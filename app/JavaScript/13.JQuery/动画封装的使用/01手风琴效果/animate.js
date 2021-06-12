function animate(obj,target,speed,attr)
{
    clearInterval(obj.timer)
    obj.timer=setInterval(go,20)
    function go()
    {
            var current=parseInt(window.getComputedStyle(obj)[attr])
            var step=(target-current)/speed
            step=step>0?Math.ceil(step):Math.floor(step)
            obj.style[attr]=current+step+"px"
            console.log(current)
            if(current==target)
            {
                clearInterval(obj.timer)
            }
    }
}