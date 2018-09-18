Plotly.d3.csv('https://raw.githubusercontent.com/one171717/malaria-spread/master/static/Average_reported_cases_09182018.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'country'),
        z: unpack(rows, 'malaria_cases'),
        text: unpack(rows, 'country'),
        autocolorscale: true
    }];

    var layout = {
      title: 'Average reported cases of Malaria for last decade',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.plot(myDiv, data, layout, {showLink: false});

});