function receivesAFunction(random) {
    random();
}

function returnsANamedFunction(){
    return function named(){
        console.log('Gage');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('Gage.');
    }
}