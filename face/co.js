document.querySelector('body').addEventListener('mousemove', eyeball);
function eyeball(e){
    let objects = document.querySelectorAll('.ball');
    // console.log(e.clientX, e.clientY);
    for(obj of objects){
    let x = e.clientX;
    let y = e.clientY;
    let posx = obj.getBoundingClientRect().left + obj.clientWidth/2 - x;
    let posy = obj.getBoundingClientRect().top + obj.clientHeight/2 - y;
    let angle = Math.atan2(posx, posy);
    let rot = ((angle*180)/Math.PI)*-1 +180;
    // console.log(rot);
    obj.style.transform = "rotate("+rot+"deg)";
    }
}

document.querySelector('.container').addEventListener('mouseenter', smile1);
document.querySelector('.container').addEventListener('mouseleave', smile2);
    
function smile1()
{
    let m = document.querySelector('.mouth');
    m.animate(
        [
            {
                borderTopLeftRadius:0,
                borderTopRightRadius:0,
                // transform: 'scale(1)',
                // transform: 'rotate(0deg)',
            },
            {
                borderTopLeftRadius:"50%",
                borderTopRightRadius:"50%",
                // transform: 'scale(1.3)',
                // transform: 'rotate(180deg)',
            }
        ],{
            duration: 200,
            // iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
            fill: 'forwards'
        }

    );
}
function smile2()
{
    let m = document.querySelector('.mouth');
    m.animate(
        [
            {
                borderTopLeftRadius:"50%",
                borderTopRightRadius:"50%",
                // transform: 'scale(1.5)',
                // transform: 'rotate(180deg)',
            },
            {
                borderTopLeftRadius:0,
                borderTopRightRadius:0,
                // transform: 'scale(1)',
                // transform: 'rotate(0deg)',
            }
        ],{
            duration: 200,
            // iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
            fill: 'forwards',
            delay: 500,
        }

    );
}

