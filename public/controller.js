//for connecting
$('#btn-connect').click(function () {
    $("#status").text('Connecting...');
    console.log("connected successfully!");
    client = mqtt.connect($("#brokerName").val())
    client.on("connect", function () {
      $("#status").text('Connected Successfully!');
  
  
      client.on("message", function (topic, payload) {
        var tr = $("<tr>")
        var timestamp = moment().format('MMMM D YYYY , h:mm:ss a')
        $("<td>").text(topic).appendTo($(tr))
        $("<td>").text(payload).appendTo($(tr))
        $("<td>").text(timestamp).appendTo($(tr))
        $("tbody").append($(tr))
      })
    })

    //for publishing
    $("#btn-publish").click(function () {
  
      var topic = $("#topic").val();
      var payload = $("#payload").val();
  
      if (topic == "" || payload == "") {
        alert("Topic/Payload not found!")
      } else {
        client.publish(topic, payload)
      }
    })
    //for Subscribing
    $('#btn-subscribe').click(function (e) {
      client.subscribe($("#topic").val())
      $("#substatus").text('Subscribed Successfully!');
    })
    //for unsubscribing
    $('#btn-unsubscribe').click(function (e) {
      client.unsubscribe($("#topic").val())
      $("#substatus").text('You have Unsubscribed!');
    })
    //for disconnecting
    $('#btn-disconnect').click(function (e) {
      client.end()
      $("#status").text("You have been Disconnected!");
    })
  
  
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  