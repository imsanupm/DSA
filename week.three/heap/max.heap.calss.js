 class Heap{
    constructor(array = []){
        this.heap = array;
        this.buildHeap();
    };

    parentIndex(index){
        return Math.floor((index-1)/1);
    };
    leftIndex(index){
        return Math.floor((2*index)+1)
    };
    rightIndex(index){
        return Math.floor((2*index)+2)
    };
    peek(){
        return this.heap[0];
    };
    buildHeap(){
        for(let i = Math.floor(this.heap.length/2)-1; i>=0; i--){
            this.heapifyDown(i);
        };
    };
    heapifyDown(index){
        let largest = index;
        let left = this.leftIndex(index);
        let right = this.rightIndex(index);

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left;
        }

         if(right < this.heap.length && this.heap[right]>this.heap[largest]){
            largest = right;
         };
         if(index!=largest){
            [this.heap[largest] , this.heap[index]] = [this.heap[index], this.heap[largest]];
         }
    };
    display(){
        console.log(this.heap);
    };
    remove(){
        if(this.heap.length===0)return null;
        this.heap[0] = this.heap.pop();
    };



 }

 const heap = new Heap([24,5,2,2,45])
 heap.display()