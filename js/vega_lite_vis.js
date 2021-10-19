var vg_1 = "data/earthquake_map.json";
var vg_2 = "data/scatter_plot.json";
var vg_3 = "data/heatmap.json";
var vg_4 = "data/rolling_average.json";
var vg_5 = "data/choropleth.json";
var vg_6 = "data/bar_chart_death.json";
var vg_7 = "data/linear_reg.json";
var vg_8 = "data/multi.json";
var vg_9 = "data/bar_chart_damage.json";

// vegaEmbed("#map", vg_1, {actions: false}).then(function(result) {
//  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);

// vegaEmbed("#scatter", vg_2, {actions: false}).then(function(result) {
// }).catch(console.error);

// vegaEmbed("#heatmap", vg_3, {actions: false}).then(function(result) {
// }).catch(console.error);

// vegaEmbed("#rolling_average", vg_4, {actions: false}).then(function(result) {
// }).catch(console.error);

// vegaEmbed("#choropleth", vg_5, {actions: false}).then(function(result) {
// }).catch(console.error);

vegaEmbed("#bar_chart_death", vg_6, {actions: false}).then(function(result) {
}).catch(console.error);

vegaEmbed("#linear_reg", vg_7, {actions: false}).then(function(result) {
}).catch(console.error);

vegaEmbed("#multi", vg_8, {actions: false}).then(function(result) {
}).catch(console.error);

vegaEmbed("#bar_chart_damage", vg_9, {actions: false}).then(function(result) {
}).catch(console.error);