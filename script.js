
 
 const btn=document.getElementById('menu-btn');
 const overlay=document.getElementById('overlay');
 const showmenu=document.getElementById('mobile-menu');
 const counters=document.querySelectorAll('.counter')
 let scrollStarted=false;

 btn.addEventListener('click',navToggle);
 document.addEventListener('scroll',scrollPage);
   
 
 function navToggle(){
     
     btn.classList.toggle('open');
     overlay.classList.toggle('overlay-show');
     document.body.classList.toggle('scroll-stop');
     showmenu.classList.toggle('show-menu');
     
    } 


   function scrollPage(){
     const scrollPos=window.scrollY;
     console.log(scrollPos);
     if(scrollPos>100 && !scrollStarted){
        countUp();
        scrollStarted=true;
        console.log("less than 100");
     }
     else if(scrollPos<100 && scrollStarted){
        reset();
        scrollStarted=false;
        console.log(scrollPos+ "more than 100");
     }
   } 

function countUp(){
    counters.forEach((counter)=>{
        counter.innerHTML='0';
        const updateCounter=()=>{
            const target= +counter.getAttribute('data-target');
            
            const increment=target/100;

            const currentCounter= +counter.innerText;

            if(currentCounter<target)
            {
                counter.innerText=`${Math.ceil(currentCounter+increment)}`;
                setTimeout(updateCounter,75);
            }
            else{
                counter.innerText=target;
            }
          

        };
        updateCounter();
    })
}    

function reset(){
    counters.forEach((c)=>(c.innerHtml='0'));
}