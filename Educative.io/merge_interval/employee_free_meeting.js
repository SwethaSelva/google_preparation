function employeeFreeTime(schedule) {
  let result = [];
  let allEmpSchedule = [];
  for (let i = 0; i < schedule.length; i++) {
    allEmpSchedule.push(...schedule[i]);
  }
  allEmpSchedule = allEmpSchedule.sort((a, b) => {
    if (a.start === b.start) {
      return a.end - b.end;
    } else return a.start - b.start;
  });

  let possibleEnd = allEmpSchedule[0].end;
  for (let i = 1; i < allEmpSchedule.length; i++) {
    if (possibleEnd < allEmpSchedule[i].start) {
      result.push(new Interval(possibleEnd, allEmpSchedule[i].start));
    }
    possibleEnd = Math.max(possibleEnd, allEmpSchedule[i].end);
  }
  return result;
}