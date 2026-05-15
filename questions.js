const hindiPercentageQuestions = [
{
q:"चावल की कीमत 60% बढ़ गई। मूल कीमत पर वापस आने के लिए नई कीमत कितने प्रतिशत घटानी होगी?",
a:["33.33%","37.5%","40%","45%"],
c:1,
solution:"पुरानी कीमत 100 मानो, नई कीमत 160 होगी। कमी = 60/160 × 100 = 37.5%",
trick:"Reverse percentage में denominator नई कीमत होती है।"
},
{
q:"40, 50 और 60 छात्रों के तीन समूहों में पास प्रतिशत क्रमशः 100%, 90% और 80% है। कुल पास प्रतिशत कितना होगा?",
a:["88.67%","84.67%","88.33%","84.33%"],
c:0,
solution:"पास छात्र = 40 + 45 + 48 = 133, कुल = 150, प्रतिशत = 88.67%",
trick:"Weighted average लगाओ।"
},
{
q:"A को B से 25% अधिक, B को C से 10% कम और C को D से 25% अधिक अंक मिले। D को 320 अंक मिले, A के अंक?",
a:["405","450","360","400"],
c:1,
solution:"A = 320 × 1.25 × 0.9 × 1.25 = 450",
trick:"Chain percentage multiplier method।"
}
];

const englishPercentageQuestions = [
{
q:"The price of rice increased by 60%. To restore the original price, the new price must be reduced by?",
a:["33.33%","37.5%","40%","45%"],
c:1,
solution:"Old price = 100, new price = 160. Reduction = 60/160 × 100 = 37.5%",
trick:"In reverse percentage, use new price as denominator."
},
{
q:"Three groups of 40, 50 and 60 students have pass percentages 100%, 90% and 80%. Find overall pass percentage.",
a:["88.67%","84.67%","88.33%","84.33%"],
c:0,
solution:"Passed = 40 + 45 + 48 = 133 out of 150 = 88.67%",
trick:"Use weighted average."
},
{
q:"A got 25% more than B, B got 10% less than C and C got 25% more than D. If D got 320, find A's marks.",
a:["405","450","360","400"],
c:1,
solution:"A = 320 × 1.25 × 0.9 × 1.25 = 450",
trick:"Use chain percentage multiplier."
}
];
