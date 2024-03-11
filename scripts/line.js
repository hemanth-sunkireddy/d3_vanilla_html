// Declare the chart dimensions and margins.
const width = 300;
const height = 300;
const marginTop = 50;
const marginRight = 50;
const marginBottom = 50;
const marginLeft = 50;

// Declare the x (horizontal position) scale.
const x = d3
  .scaleLinear()
  .domain([0, 100])
  .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3
  .scaleLinear()
  .domain([0, 100])
  .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg").attr("width", width).attr("height", height);

// Add the x-axis without transition.
const gx = svg
  .append("g")
  .attr("transform", `translate(0,${height - marginBottom})`)

  .call(d3.axisBottom(x));
// Add the y-axis.
const gy = svg
  .append("g")
  .attr("transform", `translate(${marginLeft},0)`)
  .call(d3.axisLeft(y));

// Define the line data
const lineData = [
  { x: 20, y: 80 },
  { x: 80, y: 20 },
];

// Create a line generator function
const lineGenerator = d3
  .line()
  .x((d) => x(d.x))
  .y((d) => y(d.y));

// Append the line to the SVG
svg
  .append("path")
  .datum(lineData)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 2)
  .attr("d", lineGenerator);

// Append the SVG element.
first_row.append(svg.node());
