// SVG namespace - required for creating SVG elements
const svgNS = "http://www.w3.org/2000/svg";

// ============================================
// VISUALIZATION 1: Skills Bar Chart
// ============================================

function createBarChart() {
    // Data for the chart
    const skills = [
        { name: "JavaScript", level: 50 },
        { name: "HTML/CSS", level: 60 },
        { name: "Tableau", level: 70 },
        { name: "UX Research", level: 80 },
        { name: "Git/GitHub", level: 50 }
    ];
    
    // Chart dimensions
    const width = 800;
    const height = 400;
    const barWidth = 120;
    const barSpacing = 40;
    const maxBarHeight = 300;
    
    // Create SVG element
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    
    // Create title
    const title = document.createElementNS(svgNS, "text");
    title.setAttribute("x", width / 2);
    title.setAttribute("y", 30);
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("font-family", "Roboto Mono, monospace");
    title.setAttribute("font-size", "20");
    title.setAttribute("font-weight", "bold");
    title.textContent = "My Technical Skills";
    svg.appendChild(title);
    
    // Create bars for each skill
    skills.forEach((skill, index) => {
        const x = 60 + (index * (barWidth + barSpacing));
        const barHeight = (skill.level / 100) * maxBarHeight;
        const y = height - barHeight - 50;
        
        // Create bar
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", barWidth);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("fill", "#000000");
        rect.setAttribute("rx", "4");
        
        // Add hover effect
        rect.addEventListener('mouseenter', function() {
            this.setAttribute('fill', '#666666');
        });
        rect.addEventListener('mouseleave', function() {
            this.setAttribute('fill', '#000000');
        });
        
        svg.appendChild(rect);
        
        // Create percentage label on bar
        const percentText = document.createElementNS(svgNS, "text");
        percentText.setAttribute("x", x + barWidth / 2);
        percentText.setAttribute("y", y - 10);
        percentText.setAttribute("text-anchor", "middle");
        percentText.setAttribute("font-family", "Roboto Mono, monospace");
        percentText.setAttribute("font-size", "16");
        percentText.setAttribute("font-weight", "bold");
        percentText.setAttribute("fill", "#000000");
        percentText.textContent = skill.level + "%";
        svg.appendChild(percentText);
        
        // Create skill name label
        const label = document.createElementNS(svgNS, "text");
        label.setAttribute("x", x + barWidth / 2);
        label.setAttribute("y", height - 20);
        label.setAttribute("text-anchor", "middle");
        label.setAttribute("font-family", "Roboto Mono, monospace");
        label.setAttribute("font-size", "14");
        label.textContent = skill.name;
        svg.appendChild(label);
    });
    
    // Add the SVG to the page
    document.getElementById('barChart').appendChild(svg);
}

// ============================================
// VISUALIZATION 2: Gojo's Blue Eyes
// ============================================

function createGeometricArt() {
    const width = 800;
    const height = 600;
    
    // Create SVG element
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    
    // Dark background
    const background = document.createElementNS(svgNS, "rect");
    background.setAttribute("width", width);
    background.setAttribute("height", height);
    background.setAttribute("fill", "#1a1a1a");
    svg.appendChild(background);
    
    // Create blue glow gradient
    const defs = document.createElementNS(svgNS, "defs");
    
    const glowGradient = document.createElementNS(svgNS, "radialGradient");
    glowGradient.setAttribute("id", "blueGlow");
    
    const stop1 = document.createElementNS(svgNS, "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("style", "stop-color:#00d4ff;stop-opacity:1");
    
    const stop2 = document.createElementNS(svgNS, "stop");
    stop2.setAttribute("offset", "50%");
    stop2.setAttribute("style", "stop-color:#0080ff;stop-opacity:0.8");
    
    const stop3 = document.createElementNS(svgNS, "stop");
    stop3.setAttribute("offset", "100%");
    stop3.setAttribute("style", "stop-color:#0040ff;stop-opacity:0.3");
    
    glowGradient.appendChild(stop1);
    glowGradient.appendChild(stop2);
    glowGradient.appendChild(stop3);
    defs.appendChild(glowGradient);
    svg.appendChild(defs);
    
    // Left eye position
    const leftEyeX = 250;
    const eyeY = 300;
    
    // Right eye position
    const rightEyeX = 550;
    
    // Function to create one eye
    function createEye(x, y) {
        // Outer glow (largest)
        const outerGlow = document.createElementNS(svgNS, "circle");
        outerGlow.setAttribute("cx", x);
        outerGlow.setAttribute("cy", y);
        outerGlow.setAttribute("r", 100);
        outerGlow.setAttribute("fill", "url(#blueGlow)");
        outerGlow.setAttribute("opacity", "0.3");
        svg.appendChild(outerGlow);
        
        // Middle glow
        const middleGlow = document.createElementNS(svgNS, "circle");
        middleGlow.setAttribute("cx", x);
        middleGlow.setAttribute("cy", y);
        middleGlow.setAttribute("r", 70);
        middleGlow.setAttribute("fill", "url(#blueGlow)");
        middleGlow.setAttribute("opacity", "0.5");
        svg.appendChild(middleGlow);
        
        // Eye white
        const eyeWhite = document.createElementNS(svgNS, "ellipse");
        eyeWhite.setAttribute("cx", x);
        eyeWhite.setAttribute("cy", y);
        eyeWhite.setAttribute("rx", 60);
        eyeWhite.setAttribute("ry", 40);
        eyeWhite.setAttribute("fill", "#ffffff");
        svg.appendChild(eyeWhite);
        
        // Iris (bright blue)
        const iris = document.createElementNS(svgNS, "circle");
        iris.setAttribute("cx", x);
        iris.setAttribute("cy", y);
        iris.setAttribute("r", 30);
        iris.setAttribute("fill", "#00d4ff");
        svg.appendChild(iris);
        
        // Pupil
        const pupil = document.createElementNS(svgNS, "circle");
        pupil.setAttribute("cx", x);
        pupil.setAttribute("cy", y);
        pupil.setAttribute("r", 12);
        pupil.setAttribute("fill", "#000000");
        svg.appendChild(pupil);
        
        // Light reflection (makes it look shiny)
        const reflection = document.createElementNS(svgNS, "circle");
        reflection.setAttribute("cx", x - 8);
        reflection.setAttribute("cy", y - 8);
        reflection.setAttribute("r", 6);
        reflection.setAttribute("fill", "#ffffff");
        reflection.setAttribute("opacity", "0.9");
        svg.appendChild(reflection);
    }
    
    // Create both eyes
    createEye(leftEyeX, eyeY);
    createEye(rightEyeX, eyeY);
    
    // Add title text
    const title = document.createElementNS(svgNS, "text");
    title.setAttribute("x", width / 2);
    title.setAttribute("y", 80);
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("font-family", "Roboto Mono, monospace");
    title.setAttribute("font-size", "32");
    title.setAttribute("font-weight", "bold");
    title.setAttribute("fill", "#00d4ff");
    title.textContent = "Six Eyes";
    svg.appendChild(title);
    
    // Add the SVG to the page
    document.getElementById('creativeArt').appendChild(svg);
}

// Initialize Assignment 2 visualizations when page loads
document.addEventListener('DOMContentLoaded', function() {
    createBarChart();
    createGeometricArt();
    console.log('Assignment 2 visualizations loaded successfully!');
});

// ============================================
// ASSIGNMENT 3: VIDEO GAME SALES VISUALIZATIONS
// ============================================

// Visualization 1a: Total Sales by Genre
const spec1a = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_wide@1.csv"},
  "mark": {"type": "bar", "color": "coral"},
  "encoding": {
    "x": {
      "aggregate": "sum",
      "field": "Global_Sales",
      "type": "quantitative",
      "title": "Total Global Sales (millions)"
    },
    "y": {
      "field": "Genre",
      "type": "nominal",
      "sort": "-x",
      "title": "Genre"
    },
    "tooltip": [
      {"field": "Genre", "type": "nominal"},
      {"aggregate": "sum", "field": "Global_Sales", "type": "quantitative"}
    ]
  },
  "width": 600,
  "height": 400,
  "title": "Total Global Sales by Genre"
};

vegaEmbed('#vis1a', spec1a);

// Visualization 1b: Genre by Platform (Top 5 Platforms)
const spec1b = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_wide@1.csv"},
  "transform": [
    {
      "filter": "datum.Platform == 'PS2' || datum.Platform == 'X360' || datum.Platform == 'PS3' || datum.Platform == 'Wii' || datum.Platform == 'DS'"
    }
  ],
  "mark": "bar",
  "encoding": {
    "x": {"field": "Genre", "type": "nominal", "title": "Genre"},
    "y": {
      "aggregate": "sum",
      "field": "Global_Sales",
      "type": "quantitative",
      "title": "Total Sales (millions)"
    },
    "color": {"field": "Platform", "type": "nominal", "title": "Platform"},
    "tooltip": [
      {"field": "Genre", "type": "nominal"},
      {"field": "Platform", "type": "nominal"},
      {"aggregate": "sum", "field": "Global_Sales", "type": "quantitative"}
    ]
  },
  "width": 600,
  "height": 400,
  "title": "Global Sales by Genre and Platform (Top 5 Platforms)"
};

vegaEmbed('#vis1b', spec1b);

// Visualization 2a: Platform Sales Over Time
const spec2a = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_wide@1.csv"},
  "transform": [
    {"filter": "datum.Year != null"},
    {
      "filter": "datum.Platform == 'PS2' || datum.Platform == 'X360' || datum.Platform == 'PS3' || datum.Platform == 'Wii' || datum.Platform == 'DS' || datum.Platform == 'PS4'"
    }
  ],
  "mark": {"type": "line", "point": true},
  "encoding": {
    "x": {"field": "Year", "type": "quantitative", "title": "Year"},
    "y": {
      "aggregate": "sum",
      "field": "Global_Sales",
      "type": "quantitative",
      "title": "Total Sales (millions)"
    },
    "color": {"field": "Platform", "type": "nominal", "title": "Platform"},
    "tooltip": [
      {"field": "Year", "type": "quantitative"},
      {"field": "Platform", "type": "nominal"},
      {"aggregate": "sum", "field": "Global_Sales", "type": "quantitative"}
    ]
  },
  "width": 700,
  "height": 400,
  "title": "Platform Sales Over Time"
};

vegaEmbed('#vis2a', spec2a);

// Visualization 2b: Genre Sales Trends Over Time (Area Chart)
const spec2b = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_wide@1.csv"},
  "transform": [
    {"filter": "datum.Year != null"},
    {"filter": "datum.Year >= 1980"}
  ],
  "mark": "area",
  "encoding": {
    "x": {"field": "Year", "type": "quantitative", "title": "Year"},
    "y": {
      "aggregate": "sum",
      "field": "Global_Sales",
      "type": "quantitative",
      "title": "Total Sales (millions)"
    },
    "color": {
      "field": "Genre",
      "type": "nominal",
      "scale": {"scheme": "tableau20"},
      "title": "Genre"
    },
    "tooltip": [
      {"field": "Year", "type": "quantitative"},
      {"field": "Genre", "type": "nominal"},
      {"aggregate": "sum", "field": "Global_Sales", "type": "quantitative"}
    ]
  },
  "width": 700,
  "height": 400,
  "title": "Genre Sales Trends Over Time (1980-2020)"
};

vegaEmbed('#vis2b', spec2b);

// Visualization 3a: Platform Sales by Region (Bar Chart)
const spec3a = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_long (1).csv"},
  "transform": [
    {
      "filter": "datum.platform == 'PS2' || datum.platform == 'X360' || datum.platform == 'PS3' || datum.platform == 'Wii' || datum.platform == 'DS'"
    }
  ],
  "mark": "bar",
  "encoding": {
    "x": {"field": "sales_region", "type": "nominal", "title": "Region"},
    "y": {
      "aggregate": "sum",
      "field": "sales_amount",
      "type": "quantitative",
      "title": "Total Sales (millions)"
    },
    "color": {"field": "platform", "type": "nominal", "title": "Platform"},
    "tooltip": [
      {"field": "sales_region", "type": "nominal"},
      {"field": "platform", "type": "nominal"},
      {"aggregate": "sum", "field": "sales_amount", "type": "quantitative"}
    ]
  },
  "width": 600,
  "height": 400,
  "title": "Platform Sales by Region"
};

vegaEmbed('#vis3a', spec3a);

// Visualization 3b: Regional Sales Heatmap
const spec3b = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_long (1).csv"},
  "transform": [
    {
      "filter": "datum.platform == 'PS2' || datum.platform == 'X360' || datum.platform == 'PS3' || datum.platform == 'Wii' || datum.platform == 'DS' || datum.platform == 'PS4' || datum.platform == 'PS'"
    }
  ],
  "mark": "rect",
  "encoding": {
    "x": {"field": "platform", "type": "nominal", "title": "Platform"},
    "y": {"field": "sales_region", "type": "nominal", "title": "Region"},
    "color": {
      "aggregate": "sum",
      "field": "sales_amount",
      "type": "quantitative",
      "scale": {"scheme": "blues"},
      "title": "Sales"
    },
    "tooltip": [
      {"field": "platform", "type": "nominal"},
      {"field": "sales_region", "type": "nominal"},
      {
        "aggregate": "sum",
        "field": "sales_amount",
        "type": "quantitative",
        "format": ".1f"
      }
    ]
  },
  "width": 500,
  "height": 300,
  "title": "Regional Sales Heatmap by Platform"
};

vegaEmbed('#vis3b', spec3b);

// Visualization 4a: PS2 vs PS3 Sales Over Time
const spec4a = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_wide@1.csv"},
  "transform": [
    {"filter": "datum.Year != null"},
    {"filter": "datum.Platform == 'PS2' || datum.Platform == 'PS3'"}
  ],
  "mark": {"type": "line", "point": true, "strokeWidth": 3},
  "encoding": {
    "x": {"field": "Year", "type": "quantitative", "title": "Year"},
    "y": {
      "aggregate": "sum",
      "field": "Global_Sales",
      "type": "quantitative",
      "title": "Total Sales (millions)"
    },
    "color": {
      "field": "Platform",
      "type": "nominal",
      "scale": {
        "domain": ["PS2", "PS3"],
        "range": ["#003087", "#00439C"]
      },
      "title": "Platform"
    },
    "tooltip": [
      {"field": "Year", "type": "quantitative"},
      {"field": "Platform", "type": "nominal"},
      {"aggregate": "sum", "field": "Global_Sales", "type": "quantitative"}
    ]
  },
  "width": 700,
  "height": 400,
  "title": "PS2 vs PS3: Sales Over Time"
};

vegaEmbed('#vis4a', spec4a);

// Visualization 4b: PS2 vs PS3 Regional Distribution
const spec4b = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "dataset/videogames_long (1).csv"},
  "transform": [
    {"filter": "datum.platform == 'PS2' || datum.platform == 'PS3'"}
  ],
  "mark": "bar",
  "encoding": {
    "x": {"field": "sales_region", "type": "nominal", "title": "Region"},
    "y": {
      "aggregate": "sum",
      "field": "sales_amount",
      "type": "quantitative",
      "title": "Total Sales (millions)"
    },
    "color": {
      "field": "platform",
      "type": "nominal",
      "scale": {
        "domain": ["PS2", "PS3"],
        "range": ["#003087", "#00439C"]
      },
      "title": "Platform"
    },
    "tooltip": [
      {"field": "sales_region", "type": "nominal"},
      {"field": "platform", "type": "nominal"},
      {"aggregate": "sum", "field": "sales_amount", "type": "quantitative"}
    ]
  },
  "width": 600,
  "height": 400,
  "title": "PS2 vs PS3: Regional Sales Distribution"
};

vegaEmbed('#vis4b', spec4b);

console.log('Assignment 3 Vega-Lite visualizations initialized!');