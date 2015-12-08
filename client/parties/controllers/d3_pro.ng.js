angular.module("socially").controller("d3_proControl", 
  function ($scope, $meteor,$stateParams) {

  	

 
$scope.book = $meteor.object(Books, $stateParams.booksId);





     		var vis = d3.select("#visualisation"),
    	    WIDTH = 1000,
   			 HEIGHT = 700,
   			 MARGINS = {top: 20,right: 20,bottom: 20,left: 50  },
     		xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000,2016]),
     		yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([134,215]),
     		xAxis = d3.svg.axis().scale(xScale);
  			yAxis = d3.svg.axis().scale(yScale);


    		vis.append("svg:g").call(xAxis);
    		vis.append("svg:g").attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")").call(xAxis);
    		/*vis.append("svg:g").call(yAxis);*/
    		yAxis = d3.svg.axis().scale(yScale).orient("left");
    		vis.append("svg:g").attr("transform", "translate(" + (MARGINS.left) + ",0)").call(yAxis);

    		var lineGen = d3.svg.line().x(function(d) {return xScale(d.year);}).y(function(d) {return yScale(d.sale);});
    		vis.append('svg:path').attr('d', lineGen(data)).attr('stroke', 'green').attr('stroke-width', 2).attr('fill', 'none');



        var lineGen = d3.svg.line().x(function(d) {return xScale(d.year);}).y(function(d) {return yScale(d.sale);}).interpolate("basis");
        vis.append("svg:g").attr("class","axis").attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")").call(xAxis);
 
        vis.append("svg:g").attr("class","axis").attr("transform", "translate(" + (MARGINS.left) + ",0)").call(yAxis);


$scope.students = $meteor.collection(Student, false).subscribe("student");


/*
var jsonCircles = [
   { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
   { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
   { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
 
 var svgContainer = d3.select("#visualisation").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);

var circles = svgContainer.selectAll("circle")
                          .data(jsonCircles)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                      .style("fill", function(d) { return d.color; });

                      */
  });