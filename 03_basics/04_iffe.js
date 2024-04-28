//Immediately Invoked Function Expression (IIFE)
 
 
(function chai(){                   // named iffe function
    console.log(`DB CONNECTED`)
})();                               //this ";" is very IMPORTANT HERE , cause iffe don't know where to stop context so we use semicolon to end it


//To avoid pollutioin for the Global scope that is globally declared variables, const we use iffe for the funciton which should be executed 
//immediately when our program is started


( (name)=>{                        //simple iffe function
    console.log(`DB CONNECTED2 ${name}`)
} )("sahil");