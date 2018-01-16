function graphic(data, channel, target, title, pct, num, denom) {
	var channelTitle = channel[0].toUpperCase() + channel.substring(1)
	var displayTitle = channelTitle + " " + title
	MG.data_graphic({
			target:'.graph' + target,
			title: "% " + displayTitle,
			data: data,
			chart_type:'line',
			linked: true,
			x_label: 'Submission Date',
			x_accessor: 'submission_date',
			y_accessor: 'pct_' + channel + pct,
			format: "percentage",
			x_axis: true,
			full_width: true,
			point_size: 5,
			interpolate: d3.curveLinear,
			right: 100,
			y_mouseover: function(d,i) {
				return  d[channel + num].toLocaleString() + 
				         " / " + 
				        d[channel + denom].toLocaleString() + 
				         " = " + 
				         Math.round(d["pct_" + channel + pct] * 1000) / 10 + '%'
			}
		});

}

function channelGraph(channel, target, path="data/addon-counts-new-randomized.json") {
	console.log('ok')
	d3.json(path, function(data){
		console.log(data)
		MG.convert.date(data, "submission_date", "%Y%m%d")
		pct_channel = "pct_" + channel 
		for (i in data) {
		    data[i][pct_channel + "_addons_total"] = 
		    	data[i][channel + "_addons"] / data[i][channel + "_total"]
		}
	   graphic(data, channel, target,
	   	"Users with Self-Installed Add-ons",
	   	"_addons_total", "_addons", "_total")

	});
}

channelGraph("release", "r")
channelGraph("beta", "b")
channelGraph("nightly", "n")






