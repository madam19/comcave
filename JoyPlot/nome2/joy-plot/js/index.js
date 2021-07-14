const data = `Java
5
1
3
1
4
4
2`;

const { ResponsiveOrdinalFrame } = Semiotic;

const parsedCourses = d3.csvParse(data);

const atomicData = [];

const colors = ["#2c0845", "#6782c9", "#99ceeb", "#203f52", "#24ffcd", "#069668", "#b1f65d", "#02531d", "#d8e9b2", "#96a467", "#66050d", "#d73e50", "#c99084", "#704b0c", "#3ff44c", "#4ba40b", "#f3d426", "#f6932e", "#fe5900", "#3441c5", "#d38ffd", "#a113b2", "#fb5de7", "#8a4488", "#270fe2"];

parsedCourses.forEach((course, i) => {
  Object.keys(course).forEach(key => {
    course[key] = +course[key];
    atomicData.push( {item: "course " + i, response: key, value: course[key]});
  });
  course.item = "item " + i;
  console.log("atomicData", atomicData);

});
//console.log("atomicData", atomicData);

ReactDOM.render(
React.createElement("div", null,
React.createElement(ResponsiveOrdinalFrame, {
  size: [1400, 500],
  projection: "horizontal",
  data: atomicData,
  oAccessor: "response",
  rAccessor: "value",
  summaryType: { type: "joy", amplitude: 10 },
  style: { fill: "lightblue", stroke: "darkblue", opacity: 0.5 },
  summaryStyle: (d, i) => ({ fill: colors[i % colors.length], stroke: "grey", fillOpacity: 0.75 }),
  axis: { orient: "left", tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], tickFormat: d => d + "%" },
  oLabel: d => React.createElement("text", { fontSize: "8px", textAnchor: "end", y: 3, x: -3 }, d),
  margin: { left: 100, right: 50, bottom: 28, top: 40 },
  oPadding: 5 })),


document.getElementById('main'));