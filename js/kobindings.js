ko.bindingHandlers.gMap = {
    init: function(element, valueAccessor, allBindingsAccessor) {
        var value = valueAccessor();
        var myLatlng = new google.maps.LatLng(value.Lat(),value.Long());
          var mapOptions = {
            zoom: 15,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          map = new google.maps.Map(element,
              mapOptions);

          marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title:"Barrier Portal"
          });

          $(element).data( "map", map );
          $(element).data( "marker", marker );
    },
    update: function(element, valueAccessor, allBindingsAccessor) {
        var value = valueAccessor(); 
        var myLatlng = new google.maps.LatLng(value.Lat(),value.Long());

        var map = $(element).data( "map");
        var marker = $(element).data( "marker");

        map.setCenter(myLatlng);
        marker.setPosition(myLatlng);
    }
};