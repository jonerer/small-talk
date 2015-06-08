var frame = $('<iframe>')
frame.css({
	width: "100%",
	height: 400,
	border: '1px solid black',
	overflow: 'hidden'
})
frame.attr.verticalscrolling = "no"
frame.attr.horizontalscrolling = "no"
frame.attr('src', "http://small-talk.net")

$("#small_talk").append(frame)