class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 0;
        // btn.addEventListener('click', this.addName);

        // option 1. use bind(this)
        //btn.addEventListener('click', this.addName.bind(this));

        // using annoymous function - not working (this refers to btn, not class)
        // btn.addEventListener('click', function() {
        //     this.addName();
        // });

        // option 2. use an annoymous arrow function
        btn.addEventListener('click', () => {
            this.addName();
        });
    }

    addName() {
        // const name = new NameField("Max");
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();