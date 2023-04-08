import { funcB } from './moduleB.js'
const a = 100
const aa = 1
const aaa = function(){
    console.log(1111)
}

export default function(val){
    funcB(val)

    return 'Fin'
}

export {aa, aaa}