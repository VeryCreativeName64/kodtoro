import { generaltLista } from "./listak.js";
export default class Generalt{
    #generaltLista=generaltLista
    #szElem
    constructor(generaltLista,szElem){
        this.#generaltLista=generaltLista
        this.#szElem=szElem
    }
}