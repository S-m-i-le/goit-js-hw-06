function calcAverageCalories(days) {
  let averegeCaloris = 0;
  for (const item of days) {
    averegeCaloris += item.calories;
  }
  console.log(
    days.length != 0 ? (averegeCaloris = averegeCaloris / days.length) : 0,
  );
}
// Такий виклик функції calcAverageCalories повертає 3180
calcAverageCalories([
  { day: 'monday', calories: 3010 },
  { day: 'tuesday', calories: 3200 },
  { day: 'wednesday', calories: 3120 },
  { day: 'thursday', calories: 2900 },
  { day: 'friday', calories: 3450 },
  { day: 'saturday', calories: 3280 },
  { day: 'sunday', calories: 3300 },
]);

// Такий виклик функції calcAverageCalories повертає 2270
calcAverageCalories([
  { day: 'monday', calories: 2040 },
  { day: 'tuesday', calories: 2270 },
  { day: 'wednesday', calories: 2420 },
  { day: 'thursday', calories: 1900 },
  { day: 'friday', calories: 2370 },
  { day: 'saturday', calories: 2280 },
  { day: 'sunday', calories: 2610 },
]);

// Такий виклик функції calcAverageCalories повертає 0
calcAverageCalories([]);
