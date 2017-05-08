"use strict";
/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts = "I am haha and I am AWESOME！"
// funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//  $("#main").append([funThoughts]);
var bio = {
    name: "侯浩",
    role: "Web Developer",
    contacts: {
        mobile: "15951603521",
        email: "eruerame@gmail.com",
        github: "eruerua",
        location: "徐州"
    },
    welcomeMessage: "We must travel in the direction of our fear",
    skills: ["Basketball", "DIY", "Computer","Html","Css","Javascript","Python"],
    biopic: "images/rickandmorty.jpg",
    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedbioPic); //添加图片和欢迎词
        $("#header").prepend([formattedName, formattedRole]); //增加name和role如果不添加，按照index.html中的js判断，则不会显现header
        $("#topContacts").append([formattedmobile, formattedemail, formattedgithub, formattedlocation]); //添加联系方式
        $("#header").append(formattedwelcomeMsg);
        $("#footerContacts").append([formattedmobile, formattedemail, formattedgithub, formattedlocation]); //添加联系方式

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
            name: "南京工业大学",
            location: "南京",
            degree: "学士学位",
            majors: ["过程装备与控制工程"],
            dates: "2008-2012",
            url: "http://www.njtech.edu.cn/"

        },
        {
            name: "南京工业大学",
            location: "南京",
            degree: "硕士学位",
            majors: ["化工机械"],
            dates: "2012-2015",
            url: "http://www.njtech.edu.cn/"

        }
    ],
    onlineCourses: [{
        title: "Introduction to robotic",
        school: "Queensland University of Technology",
        dates: "2015-12-1",
        url: "https://moocs.qut.edu.au/"
    },
    {
        title: "Front-End Web Developer Nanodegree",
        school: "Udacity",
        dates: "2017-04-24",
        url: "https://cn.udacity.com"
    }],
    display: function() {
        education.schools.forEach(function(element) {
            $("#education").append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace("%data%", element.name).replace("#",element.url);
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
            var formattedonlineURL = HTMLonlineURL.replace("%data%", element.url).replace("#",element.url);
            $(".education-entry:last").append([formattedonlineTitle + formattedonlineSchool, formattedonlineDates, formattedonlineURL]);
        });
    }
};

var work = {
    jobs: [{
            employer: "中石化南京工程公司",
            title: "配管工程师",
            location: "南京",
            dates: "2015-2017",
            description: "负责管道设计"
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
            title: "前端纳米学位街机游戏克隆项目",
            dates: "2017",
            description: "根据得到的可视化资源和游戏循环引擎，然后通过向游戏添加一系列实体（包括玩家角色和敌人），以重新创建经典街机游戏“青蛙过河”。",
            url: "https://github.com/eruerua/ArcadeGameClone"
        },
        {
            title: "前端纳米学位网站优化",
            dates: "2017",
            description: "优化提供的具有各种优化及性能相关问题的网站，使其达到目标的PageSpeed分数，并以60帧/秒的速度运行。",
            url: "https://github.com/eruerua/frontend-nanodegree-mobile-portfolio"
        },
        {
            title: "前端纳米学位街区地图",
            dates: "2017",
            description: "开发一个具有你所在区域或想访问的区域的地图的单页应用程序。然后，为此地图添加其他功能，包括突出显示的地点、有关这些地点的第三方数据以及浏览内容的不同方式。",
            url: "https://github.com/eruerua/streetMap"
        },
        {
            title: "前端纳米学位RSS阅读器测试",
            dates: "2017",
            description: "根据一个基于Web的RSS反馈阅读应用程序编写Jasmine测试套件",
            url: "https://github.com/eruerua/feedRead"
        }
    ],
    display: function() {
        projects.projects.forEach(function(element) {
            $("#projects").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", element.title).replace("#",element.url);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", element.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", element.description);
            $(".project-entry:last").append([formattedprojectTitle, formattedprojectDates, formattedprojectDescription]);


        });
    }
};

// display the items in the resume
bio.display();
work.display();
education.display();
projects.display();


// add map in the resume
$("#mapDiv").append(googleMap);
$(".slide-menu-button").on('click', function() {
    $('body').toggleClass('menu-hidden');
});