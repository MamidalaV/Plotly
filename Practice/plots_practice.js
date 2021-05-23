Plotly.newPlot("line_chart", [{x: ["Dp1","Dp2","Dp3","Dp4","Dp5","Dp6","Dp7"],y: [10,8,6,4,6,8,10]}])

//Plotly.newPlot("bar_chart", [{x: [1,2,3,4,5,6,7],y: [10,8,6,4,6,8,10],type:"bar"}])

var trace = [{x: ["burrito","pizza","chicken"],
                y: [10, 18, 5],
                type: "bar"}];
 Plotly.newPlot("bar_chart", trace);

//HTML will pick up the latest graph and ignore the one before.
var dataValues = [{x: ["burrito","pizza","chicken"],
            y: [10, 18, 5],
            type: "bar"}];

var layout = {title: "Luncheon Survey"};

Plotly.newPlot("bar_chart_w_title", dataValues, layout);

