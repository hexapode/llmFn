/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

//...
const customerIdHash = (CustomerId % 17) * 0.12; // Apply a hash function to CustomerId and scale it
// Include the customerIdHash in the weighted sum
const weightedSum = // previous calculations...
                    + (customerIdHash); 
//...
