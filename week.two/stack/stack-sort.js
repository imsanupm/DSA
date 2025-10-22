class stack{
    constructor(){
        this.stack = [];
        this.aux = [];
    };
    
    push(value){
        let current  = value;
        if(this.stack.length==0){
            this.stack.push(value)
        }else{
             while(current<this.stack.at(-1)){
                 this.aux.push(this.stack.pop());
             };
             this.stack.push(current);
             
             while(this.aux.length){
                 this.stack.push(this.aux.pop())
             }
        }
        
    }
    display(){
        console.log(this.stack)
    }
};

const st = new stack();
st.push(87);
st.push(99);
st.push(34);
st.push(12);
st.push(99)
st.display()








