
// this is a simple example for stackUsingQueue
// if you can't understand the logic feel free to draw logic on your notebokk;


class stackUsingQue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }
    push(value){
        while(this.s1.length){
            this.s2.push(this.s1.pop());
        };
        this.s1.push(value);
        while (this.s2.length) {
            this.s1.push(this.s2.pop());
        }
    };

    pop(){
        return this.s1.pop();
    };

    print(){
        console.log(this.s1.toLocaleString());
    }

    //this piece of code for remove mid from stack

    removeMid(){
        let mid = Math.floor(this.s1.length /2);
        let temp = [];
       for(let i = 0; i<mid; i++){
        temp.push(this.s1.pop());
       }
        this.s1.pop();

        while (temp.length) {
            this.s1.push(temp.pop())
        }
    }

};


const queue = new stackUsingQue();



// use defferent test cases for understand the output

queue.push(3);
queue.push(87);
queue.push(34);

// queue.print();

// queue.pop();
queue.print();
queue.removeMid();
queue.print()








