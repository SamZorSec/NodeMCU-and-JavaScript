var wifi = require("Wifi");
var WIFI_SSID = "LaGourmandise";
var WIFI_OPTIONS = {
  password : "!mertenat@wifi"
};

wifi.stopAP(); // disable Wi-Fi AP

wifi.connect(WIFI_SSID, WIFI_OPTIONS, function(err) {
  if (err) {
    console.log("ERROR: Connection failed, error: " + err);
  } else {
    console.log("INFO: Successfully connected");
    console.log(wifi.getStatus());
    console.log(wifi.getIP());
    
    // set hostname and make the NodeMCU available
    // through espruino.local (ping or for using the 
    // Espruino IDE over Wi-Fi
    wifi.setHostname("espruino");
    
    // save the Wi-Fi settings and they'll be used
    // automatically at power-up.
    wifi.save();
  }
});

