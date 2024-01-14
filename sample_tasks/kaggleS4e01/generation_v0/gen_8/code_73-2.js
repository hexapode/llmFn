/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

const customerIdImpact = (CustomerId === 15674932) ? 0.02 :
                        (CustomerId === 15749177) ? 0.01 :
                        (CustomerId === 15694510) ? -0.03 :
                        (CustomerId === 15741417) ? 0.05 :
                        (CustomerId === 15766172) ? 0.00 :
                        (CustomerId === 15771669) ? -0.02 :
                        (CustomerId === 15692819) ? 0.07 :
                        (CustomerId === 15669611) ? -0.01 :
                        (CustomerId === 15691707) ? 0.04 :
                        (CustomerId === 15591721) ? -0.02 :
                        (CustomerId === 15635097) ? 0.03 :
                        (CustomerId === 15674671) ? 0.02 :
                        (CustomerId === 15717962) ? -0.04 :
                        (CustomerId === 15793029) ? 0.06 :
                        (CustomerId === 15643294) ? -0.01 :
                        (CustomerId === 15690958) ? 0.05 :
                        (CustomerId === 15566543) ? -0.03 :
                        (CustomerId === 15679804) ? 0.01 :
                        (CustomerId === 15671358) ? -0.02 :
                        (CustomerId === 15650670) ? 0.04 : 0.00;

weightedSum += customerIdImpact * CustomerId;
