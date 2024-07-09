(function(window, undefined) {
  var dictionary = {
    "9f80ac91-aa65-4540-a1fb-76aa10949fd4": "ACCOMODATIONS",
    "35f77bfa-70bc-48b4-9551-3a9bc1386b4a": "FAQ",
    "6e07aea4-567d-4003-a4c7-7fcba4b4195f": "TRANSPORTATION",
    "b30d05d0-02bc-4d6c-bc41-1e1c2690a32b": "LOCAL ATTRACTIONS",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HOME",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);