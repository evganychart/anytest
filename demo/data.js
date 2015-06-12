var stage, chart;
anychart.onDocumentLoad(function() {
  anytest.setUp(900, 250);
  stage.resume();
  var rawData = [
    {   "id": "15342",
      "name": "Activities",
      "actualStart": Date.UTC(2007, 0, 25),
      "actualEnd": Date.UTC(2007, 2, 14),
      "children": [
        {   "id": "1534",
          "name": "Draft plan",
          "actualStart": Date.UTC(2007, 0, 25),
          "actualEnd": Date.UTC(2007, 1, 3)
        },
        {   "id": "15324254",
          "name": "Board meeting",
          "actualStart": Date.UTC(2007, 1, 4),
          "actualEnd": Date.UTC(2007, 1, 4)
        },
        {   "id": "153134",
          "name": "Research option",
          "actualStart": Date.UTC(2007, 1, 4),
          "actualEnd": Date.UTC(2007, 1, 24)
        },
        {   "id": "1534890",
          "name": "Final plan",
          "actualStart": Date.UTC(2007, 1, 24),
          "actualEnd": Date.UTC(2007, 2, 14)
        }
      ]
    },
    {
      "id": "423442",
      "name": "Activities",
      "actualStart": Date.UTC(2007, 0, 25),
      "actualEnd": Date.UTC(2007, 2, 14),
      "children": [
        {   "id": "1534",
          "name": "Draft plan",
          "actualStart": Date.UTC(2007, 0, 25),
          "actualEnd": Date.UTC(2007, 1, 3)
        },
        {   "id": "15324254",
          "name": "Board meeting",
          "actualStart": Date.UTC(2007, 1, 4),
          "actualEnd": Date.UTC(2007, 1, 4)
        },
        {   "id": "153134",
          "name": "Research option",
          "actualStart": Date.UTC(2007, 1, 4),
          "actualEnd": Date.UTC(2007, 1, 24)
        },
        {   "id": "1534890",
          "name": "Final plan",
          "actualStart": Date.UTC(2007, 1, 24),
          "actualEnd": Date.UTC(2007, 2, 14)
        }
      ]

    },
    {
      "id": "423212",
      "name": "Activities",
      "actualStart": Date.UTC(2007, 0, 25),
      "actualEnd": Date.UTC(2007, 2, 14),
      "children": [
        {   "id": "1534",
          "name": "Draft plan",
          "actualStart": Date.UTC(2007, 0, 25),
          "actualEnd": Date.UTC(2007, 1, 3)
        },
        {   "id": "15324254",
          "name": "Board meeting",
          "actualStart": Date.UTC(2007, 1, 4),
          "actualEnd": Date.UTC(2007, 1, 4)
        },
        {   "id": "153134",
          "name": "Research option",
          "actualStart": Date.UTC(2007, 1, 4),
          "actualEnd": Date.UTC(2007, 1, 24)
        },
        {   "id": "1534890",
          "name": "Final plan",
          "actualStart": Date.UTC(2007, 1, 24),
          "actualEnd": Date.UTC(2007, 2, 14)
        }
      ]

    }
  ];

  chart = anychart.ganttProject();
  var treeData = anychart.data.tree(rawData, anychart.enums.TreeFillingMethod.AS_TREE);
  chart.data(treeData);
  anytest.chartListen(chart, function() {
    anytest.CAT.getScreen();
    chart.dataGrid(false);
    anytest.CAT.getScreen('changeDataGridFalse', -1);
    chart.dataGrid(true);
    anytest.CAT.getScreen('return', 1);
    anytest.exit();
  }).drawInStage(chart);
});
