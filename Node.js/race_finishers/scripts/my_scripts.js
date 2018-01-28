$(document).ready(function () {

	var FREQ = 10000;
	var repeat = true;

	showFrequency();
	getDBRacers();
	setInterval(getDBRacers, FREQ);

	function showFrequency() {
		$("#freq").html("Page refreshes every " + FREQ / 1000 + " second(s).");
	}

	function getDBRacers() {
		$.getJSON("http://localhost:1337/uitslagen.json", function (json) {
			if (json.deelnemers.length > 0) {
				$('#finishers_m').empty();
				$('#finishers_f').empty();
				$('#finishers_all').empty();
				json.deelnemers.sort(function (a, b) {
					return parseInt(a.uren) * 60 + parseInt(a.minuten) - (parseInt(b.uren) * 60 + parseInt(b.minuten));
				});

				$.each(json.deelnemers, function () {
					var prefixUren = this['uren'] < 10 ? '0' : '';
					var prefixMinuten = this['minuten'] < 10 ? '0' : '';
					var info = '<li>Name: ' + this['voornaam'] + ' ' + this['naam'] + '. Time: ' + prefixUren + this['uren'] + ':' + prefixMinuten + this['minuten'] + '</li>';
					if (this['gender'] == 'M') {
						$('#finishers_m').append(info);
					} else if (this['gender'] == 'F') {
						$('#finishers_f').append(info);
					}
					$('#finishers_all').append(info);
				});
			}
		});
	}

	$("#addRunner").submit(function () {
		return false;
	});

	$('#btnSave').click(function () {

		var data = $("#addRunner :input").serializeArray();

		$.post($("#addRunner").attr('action'), data, function (json) {

			if (json.status == 500) {
				alert(json.message);
			}
			if (json.status == 200) {
				alert(json.message);
				clearInputs();
			}
		}, "json");

	});

	function clearInputs() {
		$("#txtFirstName").val('');
		$("#txtLastName").val('');
		$("#ddlGender").val('');
		$("#txtHours").val('');
		$("#txtMinutes").val('');
	}

});
