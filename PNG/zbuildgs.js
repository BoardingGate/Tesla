
(function() {

    const APP_CONFIG = {

        firebase: {
            apiKey: "AIzaSyCEAWL1Pj1OMBrGnXLOS79W3iDjMkmTQGw",
            authDomain: "boardinggate-1df74.firebaseapp.com",
            databaseURL: "https://boardinggate-1df74-default-rtdb.europe-west1.firebaseio.com",
            projectId: "boardinggate-1df74",
            storageBucket: "boardinggate-1df74.appspot.com",
            messagingSenderId: "771541345352",
            appId: "1:771541345352:web:0447d72b3383875ac5a47d"
        },

        keys: {
            googleMaps: "AIzaSyCEAWL1PjlOMBrGnXLOS79W3iDJMkmTQGw",
            mapbox: "pk.eyJ1IjoiYm9hcmRpbmdnYXRlMTEiLCJhIjoiY21kOHdtMGU4MDEzaTJpcGh4cng0c3hmMiJ9.hDdGn_5VOMkN_bTuUowtRw",
            ocm: "be9a78f7-0f5e-4f28-b742-4b7ab4b7eb5a",
            gemini: "AIzaSyBI5KOdxPrw8WFIZQ4IqZlYS-zQp7w-UCk"
        },
        
        endpoints: {
            gemini: function() {
                return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APP_CONFIG.keys.gemini}`;
            }
        }
    };

    window.APP_CONFIG = APP_CONFIG;

})();
