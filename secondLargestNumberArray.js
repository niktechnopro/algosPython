function getSecondLargest(nums) {
    var nums = nums.sort((x,y) => x>y)//sorts array in ascending order
    let lastElement = nums[nums.length-1]//lastElement in array
    let firstDuplicate = nums.indexOf(lastElement);//finds if there are duplicates of last element
    return nums[firstDuplicate-1]
}

getSecondLargest([2,4,3,1,7,9,9])
// getSecondLargest([2,3,6,6,5])

// better version
// function getSecondLargest(nums) {
//     let largest = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > largest) {
//             var secondLargest = largest;
//             largest = nums[i];
//             continue;
//         }    
//         if ((nums[i] > secondLargest) && (nums[i] < largest)) {
//             secondLargest = nums[i];
//         }
//     }
    
//     return secondLargest;
// }