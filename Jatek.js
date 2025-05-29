import {
  szinekLista,
  visszajelzesListaM,
  tippListaM,
  generaltLista,
} from "./listak.js";
import JatekSor from "./JatekSor.js";
import Generalt from "./Generalt.js";

export default class Jatek {
  #szinekLista = szinekLista;
  #generaltLista = generaltLista;
  #visszajelzesListaM = visszajelzesListaM;
  #tippListaM = tippListaM;
  #jatekter;

  constructor() {
    this.#jatekter = document.querySelector(".jatekter");
    this.generaltListaEloallit()
    this.megjelenit();
  }
  megjelenit() {
    new Generalt(this.#generaltLista)
    for (let index = 0; index < 10; index++) {
      new JatekSor(
        this.#visszajelzesListaM[index],
        this.#tippListaM[index],
        this.#jatekter
      );
    }
  }
  generaltListaEloallit() {
    let szinLista = [...this.#szinekLista]
    szinLista.sort(()=>Math.random( - 0.5)
)
  }
}