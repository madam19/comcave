let data;


function preload() {
    data = loadTable('probly3_1.csv', 'csv', 'header');
}

function setup() {
    var canvas = createCanvas(windowWidth - 10, 400);

    canvas.style('display', 'block')
        .parent('mychart');

    background(255);

    translate(10, height / 2);

    drawChart();

    drawAxis();

    drawLegend();
}

function drawChart() {

    for (let col = 1; col < data.getColumnCount(); col++) {

        beginShape();

        c = (color(COLORS[col] + "aa"));
        vertex(0, 0);
        vertex(0, 0);
        stroke(c);
        fill(c);

        for (let row = 1; row < data.getRowCount(); row++) {
            let value = data.getNum(row, col);
            let xpos = map(row, 0, data.getRowCount(), 0, (windowWidth));
            vertex(xpos, -value * 10);
        }
        vertex(windowWidth, 0);
        vertex(windowWidth, 0);

        endShape(CLOSE);

        translate(0, 5);

    }
}

function drawLegend() {

    let categoryNames = data.columns.splice(1);
    //["Java", "Administration", ".NET", "Web", "AutoCAD", "XML", "Datenbanken", "Programmiersprachen", "Netzwerke", "Design", "Mobile Geräte", "Objektorientierung", "Office", "Notes", "SAP", "Linux"];
    // console.log(categoryNames);




    // calculate quantity Simbols
    let allSimbol = 0;
    for (let i = 0; i < categoryNames.length; i++) {
        allSimbol += categoryNames[i].length;
    }
    // console.log (allSimbol);

    let rectX = 0;
    let rectY = 0;
    translate(0, 30);
    for (let j = 0; j < categoryNames.length; j++) {

        // let ypos = map(j, 0, data.getColumnCount(), 0, height);

        // draw rect with color chart
        let c = (color(COLORS[j + 1] + "aa"));
        let rectLength = categoryNames[j].length * ((windowWidth - 10) / (allSimbol + 2));
        // control end windows
        if (rectX > ((windowWidth - 10) - rectLength)) {
            rectY += 20; rectX = 0;
        }
        // console.log(rectLength);
        stroke(125);
        fill(c);
        rect(rectX, rectY, rectLength, 20);

        // draw name categorien
        rectX += rectLength / 2;
        rectY -= 10;
        textAlign(CENTER, CENTER);
        textSize(10);
        stroke(120);
        strokeWeight(2);
        fill(0);
        // if (parseInt(c.value, 16) <= parseInt("#808", 16)) {
        //     stroke(255); fill(255);
        // } else { stroke(0); fill(0); }; //farb text
        text(categoryNames[j], rectX, rectY + 20);

        //next rect
        rectX += rectLength / 2;
        rectY += 10;
    }
}




function drawAxis() {
    stroke(120);
    // strokeWeight(2);
    fill(120);
    line(0, 10, 0, - height);    //vertikal X
    line(0, 10, windowWidth - 10, 10);     // gorisontal Y
    let marker = (windowWidth - 10) / 11;

    // getting an array of data
    // let YEAR1 = [];

    // for (let i in data) {
    //     YEAR1.push(let dataDatum[0] => data[0,i].split(/-/));

    // }
    // console.log(YEAR1);

    YEAR = [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

    // year marker

    for (let i = 0; i <= data.getRowCount(); i++) {

        line(i * marker, 10, i * marker, 20);
        fill(120);
        textAlign(CENTER, TOP);
        textSize(10);
        text(YEAR[i], (marker * (i + 0.5)), 15);

    }

};

COLORS = ["#8b008b", "#9932cc", "#7CFC00", "#008B8B", "#FF1493", "#556b2f",
    "#90ee90", "#ff8c00", "#e9967a", "#9400d3", "#ff00ff", "#0000CD", "#7f4ea3",
    "#DC143C", "#008000", "#FA8072", "#ffd700",
];



