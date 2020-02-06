$(document).ready(function () {

$(function () { //------ On load, hide all sections apart from 'home'
    $("#navhome").addClass("active");
    $(".hideHome").hide();
    
    
// XXXXXXXXXX NAV BAR START XXXXXXXXXX  */

	$(".nav-link").click(function() { //------ Hide sections  
	    $("#home,.hideHome").hide();
        
	$(".nav-link").removeClass("active"); // ------ Remove active class  
	

    // ------ If/else statements to check which li was clicked ---/
    // ------ apply 'active' class only to that li, and show the corresponding secti/
	if ($(this).attr("id") === "navhome") {
		    $("#navhome").addClass("active");
            $("#home").show();

	    } else if ($(this).attr("id") === "naveat") {
		    $("#naveat").addClass("active");
            $("#eat").show();
	    } else if ($(this).attr("id") === "navdrink") {
		    $("#navdrink").addClass("active");
            $("#drink").show();   
	    } else if ($(this).attr("id") === "navstay") {
		    $("#navstay").addClass("active");
            $("#stay").show();
        
        }
    });
});

        $("#navbarbrand").click(function(){
            $("#home").show();
            $("#navhome").addClass("active");
            $("#naveat, #navdrink, #navstay").removeClass("active");
            $(".hideHome").hide();
        });


// XXXXXXXXXX NAV BAR END XXXXXXXXXX 


// XXXXXXXXXX HOME PAGE EAT/DRINK/STAY START XXXXXXXXXX 

    
    $(".buttonMain").click(function() { // ------ Hide sections ------ 
        $("#home, .hideHome").hide();

    // ------ If/else statements to check which button was clicked ------ 
    // ------ apply 'active' class only to that li, and show the corresponding section ------         
        if ($(this).attr("id") === "buttoneat") {
                $("#naveat").addClass("active");
                $("#navhome").removeClass("active");
                $("#eat").show();

            } else if ($(this).attr("id") === "buttondrink") {
                $("#navdrink").addClass("active");
                $("#navhome").removeClass("active");
                $("#drink").show();
                
            } else if ($(this).attr("id") === "buttonstay") {
                $("#navstay").addClass("active");
                $("#navhome").removeClass("active");
                $("#stay").show();
        };
    });
});

// XXXXXXXXXX HOME PAGE EAT/DRINK/STAY BOX BUTTONS END XXXXXXXXXX/


// XXXXXXXXXX MAPS/REVIEWS START XXXXXXXXXX /

function initMap(aMap){
        const map = new google.maps.Map(document.getElementById(aMap), {
            zoom: 14,
            styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#6cc3cc"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
            ,
            center: { // Brighton
                lat: 50.827362,
                lng: -0.140730  
            }
        });
        const markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
            });
        });
            const markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    } 


// XXXXXXXXXX Venue reviews start XXXXXXXXXX 

// ------ EAT ------ 

const object1 = {"name": "64 Degrees", 
"about": "Tucked away in the Brighton Lanes, 64 Degrees is a small restaurant with an open kitchen by Great British Menu 2017 winner chef Michael Bremner,  where our passionate chefs concoct an evolving menu of tasty small plates using fresh, local produce.", 
"lat":50.821695, "lng":-0.140899, 
"website": "https://64degrees.co.uk/"}

const object2 = {"name": "Chilli Pickle", 
"about": "Inspired by Dawn & Alun’s Indian travels from the tropics of Tamil Nadu & Kerala, the wetlands of West Bengal, to the Rajasthani desert plains the country is an adventure and their cuisine embraces this it is vibrant, big flavoured and truly unapologetic.", 
"lat":50.824542, "lng":-0.138657, 
"website": "https://thechillipickle.com"}

const object3 = {"name": "Isaac At", 
"about": "Isaac At is a modern British restaurant in the centre of Brighton serving Sussex on a plate. Sourcing all of its ingredients from Sussex and the surrounding area. It was also the first restaurant in the world to be serving an exclusively all English wine list. ", 
"lat":50.826980, "lng":-0.136221, 
"website": "https://www.isaac-at.com/"}

const object4 = {"name": "Meatliquor", 
"about": "Back in 2008, an elusive van known as the MEATwagon began rocking up in South London on Friday nights. London Landlord Scott Collins went to try for himself, and it was love at first bite. The burgers were like nothing else. In September 2013 we opened our first place outside of London in Brighton.", 
"lat":50.828954, "lng":-0.135693, 
"website": "https://meatliquor.com/restaurant/meatliquor-brighton/"}

const object5 = {"name": "Browns", "about": "Just a short stroll from the Royal Pavilion, the twisting alleyways of The Lanes and the resort’s iconic pier, Browns Brighton first opened its doors in the early 1970s, marking the beginning of our on-going commitment to sourcing quality produce from British suppliers and providing first-class service to our customers.", 
"lat":50.822524, "lng":-0.141957, 
"website": "https://www.browns-restaurants.co.uk/restaurants/southeast/brighton"}

const object6 = {"name": "The Salt Room", 
"about": "Boasting uninterrupted views of the Brighton seafront and iconic West Pier ruins, The Salt Room is a modern British seafood restaurant that celebrates cooking over coal. Winner of the Seafood Restaurant of the Year 2017, our seaside restaurant is the best restaurant in Brighton to enjoy sustainable, local produce. ", 
"lat":50.821452, "lng":-0.148349, 
"website": "https://www.saltroom-restaurant.co.uk/"}

const object7 = {"name": "Food For Friends", 
"about": "Food for Friends is Brighton’s original award-winning vegetarian and vegan restaurant, featured in ‘The Sunday Times’ Top Vegetarian and Vegan Restaurants and in 'The Good Food Guide 2018'. Our ethos is tasty and honest cooking using fresh & consciously sourced produce. Our relaxed and attentive atmosphere will ensure you’ll be welcomed as a guest, but will leave as a friend.", 
"lat":50.821328, "lng":-0.140952, 
"website": "https://www.foodforfriends.com"}

const object8 = {"name": "The Coal Shed", 
"about": "The Coal Shed is a steak restaurant in the heart of Brighton. The menu is simple: the highest quality ingredients, sourced as locally as possible, and expertly cooked over coal. As well as a seasonal à la carte menu, we also offer daily specials, a great value express lunch and pre theatre menu, and Brighton's favourite Sunday Sharing Roast.", 
"lat":50.822072, "lng":-0.143385, 
"website": "https://www.coalshed-restaurant.co.uk/brighton"}

const object9 = {"name": "VIP Pizza", 
"about": "An Authentic pizzeria and restaurant in offering real neapolitan pizza in the Brighton, Saltdean and Sussex area made with home made sourdough and cooked in 100% traditional wood burning pizza oven. All our ingredients are chosen based on their high quality and come from our farm in Naples regulated for its high quality.", 
"lat":50.820831, "lng":-0.136467, 
"website": "http://pizzavip.co.uk/"}

// ------ DRINK ------ /

const object10 = {"name": "Bison Beer", 
"about": "Welcome to Bison Beer. We're a bar, bottleshop and brewery brand based in Brighton and Hove, actually. We stock a huge range of craft beer from around the world with a keen interest in the Sussex beer scene. We are local, independent and proud to be a part of what we think is the best city in the country.", 
"lat":50.825452, "lng":-0.137017, 
"website": "https://www.bisonbeer.co.uk/"}

const object11 = {"name": "The Joker", 
"about": "We have lovingly refurbished our first floor, creating an elegant cocktail lounge and games room complete with pool table, dartboard and smart TV. London Road looks ace from up here. Children are welcome until 8pm everyday.", 
"lat":50.833887, "lng":-0.139027, 
"website": "http://www.thejokerbrighton.com/"}

const object12 = {"name": "The Mesmerist", 
"about": "A dapper looking lounge bar in the heart of Brighton’s Lanes that spans three floors and offers a choice of individually styled rooms and spaces to enjoy a quality food offering or an expertly mixed cocktail or two.", 
"lat":50.820973, "lng":-0.140574, 
"website": "https://www.mesmerist.pub/"}

const object13 = {"name": "Mrs Fitzherberts", 
"about": "Set in an environment that is Fitz for a king, the newly refurbished Fitzherberts boasts two great heated and lit outdoor terraces. Our street terrace on Brighton’s premier pedestrianised thoroughfare, New Road, is the BEST place to watch Brighton play.", 
"lat":50.823952, "lng":-0.139062, 
"website": "https://www.mrsfitzherberts.co.uk/"}

const object14 = {"name": "Ohso Social", 
"about": "An oasis on Brighton’s world famous beach, OhSo Social is a truly unique venue, that transforms itself from a family friendly cafe-bar by day, into a buzzing hotspot for all to socialise by night.  We’re proud to serve delicious food, cakes, coffees and artisan beers and wines, as well as cocktails, and a vast array of spirits.", 
"lat":50.819132, "lng":-0.139313, 
"website": "https://www.ohsobrighton.co.uk/"}

const object15 = {"name": "Speakeasy at the Wick", 
"about": "Taking inspiration from America's prohibition era, The Wick have revamped their top floor and created The Speakeasy, second home to a classy, decadent crowd enjoying their haunts a little more interesting than Hoves usual stomping grounds.", 
"lat":50.826080, "lng":-0.161790, 
"website": "http://www.speakeasybrighton.co.uk/"}

const object16 = {"name": "Unbarred Brewery", 
"about": "No-rules brewing from the heart of brighton. Flavour without compromise, challenging convention with passion & care. Drink beer, have fun, enjoy in good company.", 
"lat":50.833267, "lng":-0.139363, 
"website": "https://www.unbarredbrewery.com/"}

const object17 = {"name": "The Walrus", 
"about": "A stone’s throw from the beach, on historic Ship Street in Brighton’s famous Lanes, you’ll find the Walrus with its labyrinth of eclectically-decorated rooms and endless winding passageways. You’ll also discover a wonderful hidden two-storey roof garden.", 
"lat":50.820769, "lng":-0.142313, 
"website": "https://www.thewalrusbrighton.com/"}

const object18 = {"name": "World’s End", 
"about": "The World’s End is like nowhere else in Brighton. Four player virtual reality booths, an epic escape room, remote control racetrack, 50+ craft beers and Wolfsmouth burger kitchen - you won’t want to go home. Bad news, we kick you out at the end of the night. Good news, you can come back the next day.", 
"lat":50.832836, "lng":-0.138295, 
"website": "https://www.worldsend.pub/"}

// ------ STAY ------ 

const object19 = {"name": "Artist Residence Brighton", 
"about": "Creative, bohemian and downright eccentric, this unique boutique hotel at the head of Regency Square was reborn when we sent out an ad offering artists free board in return for their services. As a result, each of the 24 rooms is a blend of quirky original artwork and local character, with eye-popping sea views over Brighton seafront and the iconic West Pier.", 
"lat":50.823212, "lng":-0.149850, 
"website": "https://www.artistresidence.co.uk/our-hotels/brighton/"}

const object20 = {"name": "Brighton Surf", 
"about": "Brighton Surf Guest House is a contemporary, stylish and cosy guest house ideally located just a stones throw from the sea and the beach. We are about 400 meters from Brighton Pier in sophisticated Kemp Town, Brighton’s cosmopolitan and vibrant quarter.", 
"lat":50.819320, "lng":-0.128118, 
"website": "https://www.brightonsurf.com/"}

const object21 = {"name": "Drakes", 
"about": "All 20 bedrooms at Drakes are individually designed to make the most of the space and features of each room and are packed full of luxurious comforts. We have sought the very best of everything to be certain your stay with us is perfectly unforgettable.", 
"lat":50.819458, "lng":-0.131482, 
"website": "https://drakesofbrighton.com/"}

const object22 = {"name": "Hotel du Vin", 
"about": "Our luxury Brighton hotel is nestled in the iconic cobbled alleyways of The Lanes. Once the historic fishing village of Brighthelmstone, today The Lanes are home to designer boutiques, upmarket jewellers, and antique stores, and, of course, Hotel du Vin Brighton.", 
"lat":50.820390, "lng":-0.142473, 
"website": "https://www.hotelduvin.com/locations/brighton/"}

const object23 = {"name": "Blanch House", 
"about": "Blanch House is Brighton’s original boutique hotel. A Grade II listed town house, we are situated in a Georgian terrace just off the seafront in bohemian Kemptown in Brighton. We’re only a short walk from the centre of Brighton and a stone’s throw from the city’s stunning Regency seafront.", 
"lat":50.819649, "lng":-0.129305, 
"website": "https://www.blanchhouse.co.uk/"}

const object24 = {"name": "Mercure Brighton Seafront Hotel", 
"about": "Mercure Brighton Seafront Hotel has recently undergone major renovations. Relax in rooms brimming with charm, celebrating the quirky history of the surrounding area. Comfortable beds and rustic effect furnishings come together to celebrate the old and new.", 
"lat":50.822779, "lng":-0.155412, 
"website": "https://www.mercurebrighton.co.uk/"}

const object25 = {"name": "My Brighton", 
"about": "My Brighton is a spirited place that fuses artisan tastes with soul and progressive design. Created in 2008 as a bolthole for business, pleasure and hedonism – its design is a reflection of a collaboration between the city’s own local creatives and New York-based, award winning designer Karim Rashid.", 
"lat":50.824412, "lng":-0.138729, 
"website": "https://myhotels.com/brighton/"}

const object26 = {"name": "The Square", 
"about": "Within the walls of a beautiful Grade II Listed Building located in the fashionable neighbourhood of Kemp Town sits the stylish Square Hotel, just off the seafront overlooking a Regency garden square. Exuding luxury from your first step through the door, The Square brings a sense of style and indulgence to your stay.", 
"lat":50.819627, "lng":-0.132168, 
"website": "https://www.squarebrighton.com/"}

const object27 = {"name": "The Old Ship Hotel", 
"about": "The Old Ship’s imposing exterior is a landmark of the Brighton seafront, with many bedrooms boasting stunning views across the coast. Each room is individually designed with distinctive characterful features that will make for a comfortable stay.", 
"lat":50.820361, "lng":-0.142046, 
"website": "https://www.oldshipbrighton.co.uk/"}

//XXXXXXXXXX Venue reviews end XXXXXXXXXX 


 // XXXXXXXXXX Click functions to show review pages start XXXXXXXXXX  

function clickedObject(whatObject){
            $("#mapeat01").show();
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] 
            initMap("googlemapeat01");

            $("#mapeat01").show();
            $("#eat").hide();
            $("#drink").hide();
            $("#stay").hide();

            document.getElementById("venuename").innerHTML = whatObject["name"];
            document.getElementById("bodytext").innerHTML = whatObject["about"];
            document.getElementById("weblink").href = whatObject["website"];


    // ------ EAT ------ 
    }
     $("#eat01").click(function() {
        clickedObject(object1);
     });
     $("#eat02").click(function() {
        clickedObject(object2);
     });
     $("#eat03").click(function() {
        clickedObject(object3);
     }); 
     $("#eat04").click(function() {
        clickedObject(object4);
     }); 
     $("#eat05").click(function() {
        clickedObject(object5);
     }); 
     $("#eat06").click(function() {
        clickedObject(object6);
     }); 
     $("#eat07").click(function() {
        clickedObject(object7);
     }); 
     $("#eat08").click(function() {
        clickedObject(object8);
     }); 
     $("#eat09").click(function() {
        clickedObject(object9);
     }); 

     // ------ DRINK ------ 

     $("#drink01").click(function() {
        clickedObject(object10);
     }); 
     $("#drink02").click(function() {
        clickedObject(object11);
     }); 
     $("#drink03").click(function() {
        clickedObject(object12);
     }); 
     $("#drink04").click(function() {
        clickedObject(object13);
     }); 
     $("#drink05").click(function() {
        clickedObject(object14);
     }); 
     $("#drink06").click(function() {
        clickedObject(object15);
     }); 
     $("#drink07").click(function() {
        clickedObject(object16);
     }); 
     $("#drink08").click(function() {
        clickedObject(object17);
     }); 
     $("#drink09").click(function() {
        clickedObject(object18);
     }); 

     // ------ STAY ------ 

     $("#stay01").click(function() {
        clickedObject(object19);
     }); 
     $("#stay02").click(function() {
        clickedObject(object20);
     }); 
     $("#stay03").click(function() {
        clickedObject(object21);
     }); 
     $("#stay04").click(function() {
        clickedObject(object22);
     }); 
     $("#stay05").click(function() {
        clickedObject(object23);
     }); 
     $("#stay06").click(function() {
        clickedObject(object24);
     }); 
     $("#stay07").click(function() {
        clickedObject(object25);
     }); 
     $("#stay08").click(function() {
        clickedObject(object26);
     }); 
     $("#stay09").click(function() {
        clickedObject(object27);
     }); 

 // XXXXXXXXXX Click functions to show review pages end XXXXXXXXXX 


// XXXXXXXXXXXXX MAPS/REVIEWS END XXXXXXXXXXXXX 



// XXXXXXXXXXXXX BACK-TO BUTTONS START XXXXXXXXXXXXX */

$(".backbuttoneat").click(function(){
    $("#eat").show();
    $("#drink, #stay, #mapeat01").hide();
    }); 

$(".backbuttondrink").click(function(){
    $("#drink").show();
    $("#eat, #stay, #mapeat01").hide();
    }); 
    
$(".backbuttonstay").click(function(){
    $("#stay").show();
    $("#eat, #drink, #mapeat01").hide();
    }); 

// XXXXXXXXXXXXX BACK-TO BUTTONS END XXXXXXXXXXXXX 



