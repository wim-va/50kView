//
// pingpong worker
//

// als message naar deze worker gestuurd wordt, begint worker met uitvoering van pingpong
onmessage = pingpong;

function pingpong(event) {
	console.log("Worker received the following message: " + event.data);
	if (event.data == "ping") {
		postMessage("pong");
	}
	else {
		// intentionally make an error!
		1/x;
	}
}

