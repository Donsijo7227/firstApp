//create an Immediately Invoked Function Expression (IIFE) to run at startup
(function(){
    function start(){
        console.log("App started");
        let x=1;
        console.log(x);
    };
    window.addEventListener('load',start);
}
    
)();