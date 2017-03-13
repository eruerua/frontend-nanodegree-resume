/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // var awesomeThoughts = "I am haha and I am AWESOME！"
 // funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 //  $("#main").append([funThoughts]);

var bio = {
    name: "ha ha",
    role: "web developer",
    contacts: {
        mobile: "15951603521",
        email: "houhaoeru@163.com",
        github: "erueru",
        location: "南京市"
    },
    pictureURL: "images/me.jpg",
    welcomeMessage: "Hello",
    skills: ["dota", "basketball","football","computer"]
};

var education = {
    "schools": [
    {
        "names": "nitech",
        "location": "南京市",
        "degree": "master",
        "major": "engineer",
        "date": "2008",
        "url": "https://example.com"

    }]
};

var work = {
    "jobs": [
    {
        "employer": "haha",
        "title": "engineer",
        "dates": "2008",
        "description": "haha",
        "location": "南京市"
    },
    {
        "employer": "haha2",
        "title": "engineer2",
        "dates": "2015",
        "description": "haha",
        "location": "徐州市"
    }]
};

var projects = {
    "projects": [
    {
        "title": "haha",
        "dates": "2008",
        "description": "haha",
        "images": ["images/proj2.gif", "images/proj2.gif"]
    },
    {
        "title": "haha2",
        "dates": "2012",
        "description": "haha2",
        "images": ["images/proj3.gif", "images/proj4.gif"]
    }]
};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
// var formattedskillsStart = HTMLskillsStart;
// var formattedskills1 = HTMLskills.replace("%data%",bio.skills[0]);
// var formattedskills2 = HTMLskills.replace("%data%",bio.skills[1]);

// var formattedworkStart = HTMLworkStart.replace("%data%",work.workStart);
// var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.workEmployer);
// var formattedworkTitle = HTMLworkTitle.replace("%data%",work.workTitle);
$("#header").prepend([formattedName,formattedRole]);//增加name和role如果不添加，按照index.html中的js判断，则不会显现header

$("#topContacts").append([formattedmobile,formattedemail,formattedgithub,formattedlocation]);//添加联系方式

$("#header").append([formattedbioPic,formattedwelcomeMsg]);//添加图片和欢迎词

//如果存在skills则显示出来。
if(bio.skills.length !== 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(element) {
        var formattedskill = HTMLskills.replace("%data%",element);
        $("#skills").append(formattedskill);
    });
}


// for (var element in work.job) {
//     $("#workExperience").append(HTMLworkStart);
//     var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.job[element].employer);
//     var formattedworkTitle = HTMLworkTitle.replace("%data%",work.job[element].title);
//     $(".work-entry:last").append((formattedworkEmployer + formattedworkTitle));//last选择器，防止覆盖前者。
//     var formattedworkDates = HTMLworkDates.replace("%data%",work.job[element].dates);
//     var formattedworkDescription = HTMLworkDescription.replace("%data%",work.job[element].description);
//     $(".work-entry:last").append([formattedworkDates,formattedworkDescription]);
// }

var displayWork = function() {
    work.jobs.forEach(function(element) {
    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%",element.employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%",element.title);
    $(".work-entry:last").append((formattedworkEmployer + formattedworkTitle));//last选择器，防止覆盖前者。
    var formattedworkDates = HTMLworkDates.replace("%data%",element.dates);
    var formattedworkDescription = HTMLworkDescription.replace("%data%",element.description);
    $(".work-entry:last").append([formattedworkDates,formattedworkDescription]);
});
};

displayWork();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}


projects.display = function() {
    projects.projects.forEach(function(element) {
        $("#projects").append(HTMLprojectStart);
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%",element.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%",element.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%",element.description);
        $(".project-entry:last").append([formattedprojectTitle,formattedprojectDates,formattedprojectDescription]);
        element.images.forEach(function(imageUrl) {
            var formattedprojectImage = HTMLprojectImage.replace("%data%",imageUrl);
            $(".project-entry:last").append(formattedprojectImage);
        });

    });
};
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

