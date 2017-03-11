/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // var awesomeThoughts = "I am haha and I am AWESOME！"
 // funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 //  $("#main").append([funThoughts]);

var bio = {
    name: "haha",
    role: "web developer",
    contactInfo: {
        mobile: "15951603521",
        email: "houhaoeru@163.com",
        github: "erueru",
        location: "nanjing"
    },
    pictureURL: "images/me.jpg",
    welcomeMessage: "Hello",
    skills: ["dota", "basketball"]
};

var work = {
    workStart: "nanjng",
    workEmployer: "no",
    workTitle: "engineer",
    workDates: "2015.7",
    workLocation: "nanjing",
    workDescription: "boring"
    };
var education = {
    schoolStart: "nanjing",
    schoolName: "njtech",
    schoolDegree: "master",
    schoolDates: "2008",
    schoolLocation: "nanjing",
    schoolMajor: "chemical"
    };


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedmobile = HTMLmobile.replace("%data%",bio.contactInfo.mobile);
var formattedemail = HTMLemail.replace("%data%",bio.contactInfo.email);
var formattedgithub = HTMLgithub.replace("%data%",bio.contactInfo.github);
var formattedlocation = HTMLlocation.replace("%data%",bio.contactInfo.location);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedskillsStart = HTMLskillsStart;
var formattedskills1 = HTMLskills.replace("%data%",bio.skills[0]);
var formattedskills2 = HTMLskills.replace("%data%",bio.skills[1]);

var formattedworkStart = HTMLworkStart.replace("%data%",work.workStart);
var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.workEmployer);
var formattedworkTitle = HTMLworkTitle.replace("%data%",work.workTitle);
$("#header").prepend([formattedName,formattedRole,formattedmobile,formattedemail,formattedgithub,formattedlocation,formattedbioPic,formattedwelcomeMsg,formattedskillsStart,formattedskills1,formattedskills2]);
$("#workExperience").append([formattedworkStart,formattedworkEmployer+formattedworkTitle]);
