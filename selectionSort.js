const numbers=[243, 77, 6, 2, 1, 5, 63, 73, 90, 0];
function selectionSort(array) {
    const length=array.length;
    for (let i=0; i<length;i++){
        let min=i;
        let temp=array[i];
        for(let j=i+1;j<length;j++){
            if(array[j]<array[min]){
                min=j;
            
            }
            
        }
        array[i]=array[min];
        array[min]=temp;
        
    }
    return array;
}
selectionSort(numbers);
console.log(numbers);