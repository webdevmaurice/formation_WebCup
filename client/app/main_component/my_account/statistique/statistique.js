/**
 * Created by formation3 on 3/25/2016.
 */
window.onload = function() {
    $("#chartContainer").CanvasJSChart({
        title: {
            text: "Vos destinations",
            fontSize: 24
        },
        axisY: {
            title: "Destinations en %"
        },
        legend :{
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                toolTipContent: "{label} <br/> {y} %",
                indexLabel: "{y} %",
                dataPoints: [
                    { label: "Maurice",  y: 30.3, legendText: "Maurice"},
                    { label: "Reunion",    y: 19.1, legendText: "Reunion"  },
                    { label: "Seychelles",   y: 4.0,  legendText: "Seychelles" },
                    { label: "Madagascar",       y: 3.8,  legendText: "Madagascar"},
                    { label: "Rodrigues",   y: 3.2,  legendText: "Rodrigues" },
                    { label: "Mayotte",   y: 39.6, legendText: "Mayotte" }
                ]
            }
        ]
    });
}