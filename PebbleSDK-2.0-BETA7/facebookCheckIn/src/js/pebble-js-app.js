Pebble.addEventListener("ready",
    function(e) {
        console.log("Hello world! - Sent from your javascript application.");
        var req = new XMLHttpRequest();
  		req.open('GET'
  				,'https://graph.facebook.com/search?type=place&center=43,-80&distance=10000&limit=2&access_token=CAACEdEose0cBAKuH9rUp2wGsK06TJNs6DNFjGgJY1NuVb3Ytjhm3WnQaJdOvu6TZB6rIELQySINLryLTL4f930GD8mhqokZAL82XZBWSZBCbpnmqlZAiUsz2ksZCBLj03lvkWOc9eEu709iRXi604NuEmUWDuPLii4UGVbZBfZCaQy3SjLHqCw1LKjdh20r7ZACkGT9xIP0GFvQZDZD'
  				, true);
  		req.onload = function(e) {
    		if (req.readyState == 4 && req.status == 200) {
      			if(req.status == 200) {
        			var response = JSON.parse(req.responseText);
        			console.log(response);
      			} else { console.log("Error"); }
    		}
 		}
  		req.send(null);
    }
);
