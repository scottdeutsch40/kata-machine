export default function bubble_sort(arr: number[]): void {
  let counter = 0;
  let didSwap = true;
  while (didSwap){
    didSwap = false;
    for (let i = 0; i < arr.length - counter - 1; i++){
      if (arr[i] > arr[i+1]){
        didSwap = true;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      }
    }
    counter++;
  }
}