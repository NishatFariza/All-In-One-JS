//global scope
const i_am_global = 100;

//local scope
function local() {
    const i_am_local = 75;
    console.log(i_am_local);
}


//block scope
{
    const i_am_block = 50;

    function blocked() {
        console.log(i_am_block)
    }
}

//lexical scope
function lexical() {
    const a = 20;
    function outerInner() {
        const b = 40;
        function inner() {
            console.log(a)
        }
    }
}