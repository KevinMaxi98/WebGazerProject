let  domPerign = [];
webgazer.setGazeListener((data, timestamp) => {
    if (data) {
        domPerign.push([data.x, data.y, timestamp])
    }
}).begin()

var finish = document.getElementById("download");
finish.onclick = function(e){
        let csv = 'x,y,timestamp\n';
        domPerign.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
        });
        document.write(csv);
        let hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = "domPerignom.csv";
        hiddenElement.click();

};
