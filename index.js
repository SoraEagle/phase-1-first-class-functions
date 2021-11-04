function receivesAFunction(fun){
    return fun();
}
receivesAFunction(function spy(){return "I am totally not a spy!"});


function returnsANamedFunction(){
    return function names(){
        return "I have many names"
    };
}


function returnsAnAnonymousFunction(unknown){
    return function () {
        return 'I' + 'am' + 'nobody'
    };
}