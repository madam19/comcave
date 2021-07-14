chart = {
    const svg = d3.select(DOM.svg(width, height));

    svg.append("g")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);

    const group = svg.append("g")
        .selectAll("g")
        .data(data.series)
        .join("g")
        .attr("transform", d => `translate(0,${y(d.name) + 1})`);

    group.append("path")
        .attr("fill", "#ddd")
        .attr("d", d => area(d.values));

    group.append("path")
        .attr("fill", "none")
        .attr("stroke", "black")
        .attr("d", d => line(d.values));

    return svg.node();
}
overlap = 8;
height = data.series.length * 17;
margin = ({ top: 40, right: 20, bottom: 30, left: 120 });
x = d3.scaleTime()
    .domain(d3.extent(data.dates))
    .range([margin.left, width - margin.right]);
y = d3.scalePoint()
    .domain(data.series.map(d => d.name))
    .range([margin.top, height - margin.bottom]);
z = d3.scaleLinear()
    .domain([0, d3.max(data.series, d => d3.max(d.values))]).nice()
    .range([0, -overlap * y.step()]);
xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0));
yAxis = g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).tickSize(0).tickPadding(4))
    .call(g => g.select(".domain").remove());
area = d3.area()
    .curve(d3.curveBasis)
    .defined(d => !isNaN(d))
    .x((d, i) => x(data.dates[i]))
    .y0(0)
    .y1(d => z(d));
    line = area.lineY1();
    data = {
        const data = await d3.csv("/probly3.csv", ({value})=> +value),
          
        const values = d3.nest()
            .key(d => d.name)
            .key(d => d.date)
            .rollup(v => v[0].value)
          .map(data),
      
        return {
          series: values.entries().map(({key, value}) => ({
            name: key,
            values: dates.map(d => value.get(+d))
          })),
          dates
        }
      }