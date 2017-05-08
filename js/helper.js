/*
This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><svg class="verAli" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 35 35" style="enable-background:new 0 0 35 35;" xml:space="preserve"><path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625H8.979V3.749h17.042V30.625z"/></svg><span class="white-text verAli">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><svg class="verAli" width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg><span class="white-text verAli">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><svg class="verAli" width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"/></svg><span class="white-text verAli">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><svg class="verAli" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 464.857 464.857" style="enable-background:new 0 0 464.857 464.857;" xml:space="preserve"><polygon style="fill:#010002;" points="464.857,415.228 422.401,171.135 352.601,171.135 352.609,174.622 352.65,195.781 352.65,195.927 394.065,195.927 430.969,390.436 33.701,390.436 77.986,195.927 321.948,195.927 321.908,179.142 321.892,171.135 50.95,171.135 0,415.228"/><path style="fill:#010002;" d="M349.456,230.278l-5.552,7.486c-1.528,2.065-3.942,3.284-6.511,3.284c0,0-0.008,0-0.016,0c-2.56,0-4.975-1.211-6.511-3.26l-6.771-9.055l-0.471-0.634c-1.049-1.398-1.618-3.105-1.618-4.853l-0.033-17.655v-1.553H84.48 l-40.586,178.26h36.538c-5.332-5.584-3.008-17.476,7.031-17.476s12.355,11.884,7.031,17.476h326.663l-33.823-178.26h-34.668 l0.033,15.55l0.008,3.593c0,1.748-0.561,3.455-1.601,4.861L349.456,230.278z M107.785,352.134c-13.103,0-13.103-20.321,0-20.321 S120.896,352.134,107.785,352.134z M138.275,331.804c-13.103,0-13.103-20.321,0-20.321S151.378,331.804,138.275,331.804z M178.926,331.804c-13.103,0-13.103-20.321,0-20.321S192.029,331.804,178.926,331.804z M219.569,331.804 c-13.103,0-13.103-20.321,0-20.321S232.68,331.804,219.569,331.804z M260.22,331.804c-13.103,0-13.103-20.321,0-20.321 C273.323,311.483,273.331,331.804,260.22,331.804z M302.139,329.268c-13.103,0-13.103-20.321,0-20.321 C315.242,308.947,315.251,329.268,302.139,329.268z M332.629,306.403c-13.103,0-13.103-20.321,0-20.321 C345.733,286.081,345.733,306.403,332.629,306.403z M340.246,267.873c-13.103,0-13.103-20.321,0-20.321 C353.349,247.552,353.357,267.873,340.246,267.873z"/><path style="fill:#010002;" d="M360.088,96.645l-0.065-33.79l12.29-0.024c-0.016-7.308-15.721-13.201-35.115-13.201 c-0.065,0-0.13,0-0.187,0c-19.484,0.041-35.27,6.015-35.254,13.339l12.29-0.024l0.065,33.799 c-14.469,8.112-24.256,23.589-24.215,41.358l94.576-0.187C384.441,120.144,374.597,104.7,360.088,96.645z"/><polygon style="fill:#010002;" points="330.02,171.135 330.036,179.125 330.077,195.927 330.085,199.991 330.093,204.056 330.093,205.584 330.126,223.239 330.597,223.873 337.368,232.928 342.92,225.442 344.578,223.215 344.57,219.622 344.538,204.056 344.53,199.991 344.522,195.927 344.522,195.797 344.481,174.638 344.473,171.135 344.44,156.227 344.424,146.904 329.971,146.928 329.988,152.577 330.02,170.314     "/></svg><span class="white-text verAli">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLsentence = '<span>%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/

var map;
function gmap() {
  map = new AMap.Map("map", {
      resizeEnable: true,
      scrollWheel: false
  });
  var geocoder = new AMap.Geocoder();
  var icon = new AMap.Icon({
              image: 'http://vdata.amap.com/icons/b18/1/2.png',
              size: new AMap.Size(24, 24)
            });
  //地理编码,返回地理编码结果
  var locations = locationFinder();
  locations.forEach(function(city) {
      geocoder.getLocation(city, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
              geocoder_CallBack(result);
          }
      });
  });

  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    console.log(locations);
    return locations;
    console.log(locations);
  }

  function addMarker(d) {
      var marker = new AMap.Marker({
          map: map,
          icon: icon,
          position: [d.location.getLng(),d.location.getLat()]
      });
      var infoWindow = new AMap.InfoWindow({
          content: d.formattedAddress,
          offset: {x: 0, y: -30}
      });
      marker.on("mouseover", function(e) {
          infoWindow.open(map, marker.getPosition());
      });
  }

  //地理编码返回结果展示
  function geocoder_CallBack(data) {
      //地理编码结果数组
      var geocode = data.geocodes;
      for (var i = 0; i < geocode.length; i++) {
          addMarker(geocode[i]);
      }
      map.setFitView();
      // document.getElementById("result").innerHTML = resultStr;
  }
}


window.addEventListener('load', gmap);

