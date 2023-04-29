/*let fruit = "orange"
if (fruit.length > 5){
  console.log("The fruit name has more than five characters.")
} */


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (stations) {
  const goodStations = []

for(const station of stations) {
  const capacity = station[1]

  if(capacity >= 20) {
    
    const venueType = station[2];

    if (venueType === 'school' || venueType === 'community centre') {
      goodStations.push(station[0]);
        }

  }
 }
   return goodStations
}
console.log(chooseStations[stations])