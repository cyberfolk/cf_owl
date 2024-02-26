/** @odoo-module **/ // <-- Commento necessario

// Importiamo Component e useState da owl
import { Component, useState } from '@odoo/owl';

// Definizione del componente HelloWorld
export class HelloWorld extends Component {
  // Inizializzazione dello stato del componente
    setup() {
      state = useState({ name: "Mondo" });

      // Metodo per aggiornare lo stato (ad esempio, dopo un input dell'utente)
//      updateName(newName) {
//        this.state.name = newName;
//      }
  }
}

// Definizione del template del componente
HelloWorld.template = 'HelloWorld';

// Registrazione del componente per l'utilizzo in un'app OWL
HelloWorld.components = { HelloWorld };


