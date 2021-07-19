(function(){
    function App(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    function MobileApp(name, licence, stars, platforms) {
        App(this, name, licence, stars);
        this.platforms = platforms;
    }

    function WebApp(name, licence, stars, url, technologies ) {
        App(this, name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }
    MobileApp.prototype = Object.create(App.prototype);
    MobileApp.prototype.constructor = MobileApp;
    WebApp.prototype = Object.create(App.prototype);
    WebApp.prototype.constructor = WebApp;

    WebApp.prototype.getData = function() {
        var fullData = "The name of WebApp is: " + this.name + ", its URL is: " + this.url + ". This WebApplication is using technologies: " + this.technologies + ". Its licence is: " + this.licence + ", and it has been rated with " + this.stars + " stars."
        return fullData;
    }
    WebApp.prototype.reactBased = function() {
        var reactUsed = false;
        var result = "";
        for(var i = 0; i<this.technologies.length; i++) {
            if(this.technologies[i] === "React") {
                reactUsed = true;
            }
        }
        if(reactUsed) {
            result = "React is one of used technologies."
        } else {
            result = "React hasn't been used for development of this app."
        }
        return result;
    }
    MobileApp.prototype.getData = function() {
        var fullData = "The name of MobApp is: " + this.name + ", its platforms are: " + this.platforms + ". Its licence is: " + this.licence + ", and it has been rated with " + this.stars + " stars."
        return fullData;
    }
    MobileApp.prototype.forAndroid = function() {
        var forAndroid = false;
        var result = "";
        for(var i = 0; i<this.platforms.length; i++) {
            if(this.platforms[i] === "Android") {
                forAndroid = true;
            }
        }
        if(forAndroid) {
            result = "One of the platforms the application is developed for is Android."
        } else {
            result = "This app is not for Android!"
        }
        return result;
    }
    MobileApp.prototype.isCCLicence = function() {
        var ccLicence = false;
        var result = ""; 
        if(this.licence === "CC" || this.licence === "Creative Commons") {
            ccLicence = true;
        }
        if(ccLicence) {
            result = "This application has CC licence";
        } else {
            result = "This application does NOT have CC licence"
        }
        return result;
    }
    MobileApp.prototype.like = function (like) {
        if(like) {
            this.stars++;
        }
    }   
    MobileApp.prototype.getStars = function () {
        return this.stars;
    } 

    var mobApp = new MobileApp("Viber","CC", 10, ["IOS", "Android"] );
    var webApp = new WebApp("MDN", "nesto", 10 , "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance", ["HTML", "CSS", "Php", "JavaScript", "React"]);

    mobApp.like(true);
    mobApp.like(true);

    webApp.like(true);
    webApp.like(true);

    console.log(mobApp.isCCLicence());
    console.log(mobApp.getData());
    console.log(mobApp.getStars())

    console.log(webApp.isCCLicence());
    console.log(webApp.getData());
    console.log(webApp.getStars())
})()