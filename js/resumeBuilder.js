"use strict";
/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts = "I am haha and I am AWESOME！"
// funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//  $("#main").append([funThoughts]);
var bio = {
    name: "Eru Era",
    role: "Web Developer",
    contacts: {
        mobile: "159********",
        email: "eruerame@gmail.com",
        github: "eruerua",
        location: "Nan Jing"
    },
    welcomeMessage: "Hello, Welcome!!!!",
    skills: ["Basketball", "DIY", "Computer"],
    biopic: "images/me.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend([formattedName, formattedRole]); //增加name和role如果不添加，按照index.html中的js判断，则不会显现header
        $("#topContacts").append([formattedmobile, formattedemail, formattedgithub, formattedlocation]); //添加联系方式
        $("#footerContacts").append([formattedmobile, formattedemail, formattedgithub, formattedlocation]); //添加联系方式
        $("#header").append([formattedbioPic, formattedwelcomeMsg]); //添加图片和欢迎词

        //如果存在skills则显示出来。
        if (bio.skills.length !== 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(element) {
                var formattedskill = HTMLskills.replace("%data%", element);
                $("#skills").append(formattedskill);
            });
        }
    }
};

var education = {
    schools: [{
            name: "NjTech",
            location: "Nan Jing",
            degree: "Bachelor",
            majors: ["Mechanism", "Art"],
            dates: "2008-2012",
            url: "http://www.njtech.edu.cn/"

        },
        {
            name: "NjTech",
            location: "Nan Jing",
            degree: "Master",
            majors: ["Mechanism"],
            dates: "2012-2015",
            url: "http://www.njtech.edu.cn/"

        }
    ],
    onlineCourses: [{
        title: "Introduction to robotic",
        school: "Queensland University of Technology",
        dates: "2015-12-1",
        url: "https://moocs.qut.edu.au/"
    }],
    display: function() {
        education.schools.forEach(function(element) {
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", element.name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", element.degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", element.dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", element.location);
            $(".education-entry:last").append([formattedschoolName + formattedschoolDegree, formattedschoolDates, formattedschoolLocation]);
            element.majors.forEach(function(major) {
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(formattedschoolMajor);
            });
        });
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(element) {
            $("#education").append(HTMLschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", element.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", element.school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", element.dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", element.url);
            $(".education-entry:last").append([formattedonlineTitle + formattedonlineSchool, formattedonlineDates, formattedonlineURL]);
        });
    }
};

var work = {
    jobs: [{
            employer: "Haha1",
            title: "Engineer",
            location: "Nan Jing",
            dates: "2015-2016",
            description: "Engineer"
        },
        {
            employer: "Haha2",
            title: "Engineer",
            location: "Xu Zhou",
            dates: "2017",
            description: "Engineer"
        }
    ],
    display: function() {
        work.jobs.forEach(function(element) {
            $("#workExperience").append(HTMLworkStart);
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", element.employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", element.title);
            $(".work-entry:last").append((formattedworkEmployer + formattedworkTitle)); //last选择器，防止覆盖前者。
            var formattedworkDates = HTMLworkDates.replace("%data%", element.dates);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", element.location);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", element.description);
            $(".work-entry:last").append([formattedworkDates, formattedworkLocation, formattedworkDescription]);
        });
    }
};

var projects = {
    projects: [{
            title: "Haha1",
            dates: "2013",
            description: "This is project haha1",
            images: ["images/proj2.gif", "images/proj2.gif"]
        },
        {
            title: "Haha2",
            dates: "2014",
            description: "This is project haha2",
            images: ["images/proj3.gif", "images/proj3.gif"]
        }
    ],
    display: function() {
        projects.projects.forEach(function(element) {
            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", element.title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", element.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", element.description);
            $(".project-entry:last").append([formattedprojectTitle, formattedprojectDates, formattedprojectDescription]);
            element.images.forEach(function(imageUrl) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", imageUrl);
                $(".project-entry:last").append(formattedprojectImage);
            });

        });
    }
};

// display the items in the resume
bio.display();
work.display();
projects.display();
education.display();

// add map in the resume
$("#mapDiv").append(googleMap);