// ============================================
// ASSIGNMENT 3: VIDEO GAME SALES VISUALIZATIONS
// ============================================

// NOTE: Make sure your CSV files are in the same directory as this file
// or update the paths below to match your file structure

// Visualization 1a: Total Sales by Genre
const spec1a = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "videogames_wide.csv"},
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
  "data": {"url": "videogames_wide.csv"},
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
  "data": {"url": "videogames_wide.csv"},
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
  "data": {"url": "videogames_wide.csv"},
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
  "data": {"url": "videogames_long.csv"},
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
  "data": {"url": "videogames_long.csv"},
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
  "data": {"url": "videogames_wide.csv"},
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
  "data": {"url": "videogames_long.csv"},
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
