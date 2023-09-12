var testthis = mp.trigger;




function globalEmitServer(data, args) {

        mp.trigger("server", data, ...args)

}


function fuckThis(data, args) {

        mp.trigger(data, args)

}
function fuckThistwo(data, args, argse) {

        mp.trigger(data, args, argse)

}



function globalEmit(t, data, args) {

        mp.trigger("componentEvent", t, data, ...args)

}