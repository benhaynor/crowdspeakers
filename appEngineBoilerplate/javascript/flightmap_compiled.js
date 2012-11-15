function FlightRoute(b,c){this.origin=b;this.destination=c;this.destination.destinations.push(b);this.origin.destinations.push(c);this.polyline=new google.maps.Polyline({path:[b.location,c.location],geodesic:!0})}FlightRoute.prototype.show=function(){this.polyline.setMap(flightmap.map);this.origin.show();this.destination.show()};
function Airport(b,c,a){this.longName=b;this.code=c;this.location=a;var e=this.destinations=[],f=this.marker=new google.maps.Marker({position:a,title:b});google.maps.event.addListener(f,"click",function(){for(var a="",d=0;d<e.length;++d)var g=e[d],a=a+("<li>"+g.longName+" ("+g.code+")</li>");a="<b>"+b+" ("+c+")</b><br><br>Destinations: <ul>"+a+"</ul>";flightmap.infowindow.setContent(a);flightmap.infowindow.open(flightmap.map,f)})}Airport.prototype.show=function(){this.marker.setMap(flightmap.map)};
var flightmap={accra:new Airport("Accra","ACC",new google.maps.LatLng(5.60737,-0.171769)),kumasi:new Airport("Kumasi","KUM",new google.maps.LatLng(6.7125,-1.591111)),tamale:new Airport("Tamale","TAM",new google.maps.LatLng(9.556944,-0.863056)),takoradi:new Airport("Takoradi","TAK",new google.maps.LatLng(4.892116,-1.775818)),new_york:new Airport("New York","JFK",new google.maps.LatLng(40.7142,-74.0064))};
flightmap.routes=[new FlightRoute(flightmap.accra,flightmap.kumasi),new FlightRoute(flightmap.accra,flightmap.tamale),new FlightRoute(flightmap.accra,flightmap.takoradi),new FlightRoute(flightmap.accra,flightmap.new_york)];
flightmap.init=function(){flightmap.map=new google.maps.Map(document.getElementById("flightmap"),{mapTypeId:google.maps.MapTypeId.ROADMAP});flightmap.infowindow=new google.maps.InfoWindow;for(var b=new google.maps.LatLngBounds,c=0;c<flightmap.routes.length;++c){var a=flightmap.routes[c];a.show();b.extend(a.origin.location);b.extend(a.destination.location)}flightmap.map.fitBounds(b)};