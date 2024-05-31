$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

 /*estiloz zomm */
 document.addEventListener('DOMContentLoaded', () => {
	const zoomableImages = document.querySelectorAll('.zoomable');
	const zoomedImageContainer = document.getElementById('zoomedImageContainer');
	const zoomedImage = document.getElementById('zoomedImage');
	const closeBtn = document.querySelector('.zoomed-image-container .close');
  
	zoomableImages.forEach(image => {
	  image.addEventListener('click', () => {
		zoomedImage.src = image.src;
		zoomedImageContainer.style.display = 'flex';
	  });
	});
  
	closeBtn.addEventListener('click', () => {
	  zoomedImageContainer.style.display = 'none';
	});
  
	zoomedImageContainer.addEventListener('click', (event) => {
	  if (event.target === zoomedImageContainer) {
		zoomedImageContainer.style.display = 'none';
	  }
	});
  });
  