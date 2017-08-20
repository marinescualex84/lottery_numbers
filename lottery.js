//SHOW "Feeling Lucky Today?" text with 'fade in' effect

	// Done with jQuery
		//$('#lucky').fadeIn(2500);

	// Done with JavaScript
		function displayLucky() {
			var lucky = document.querySelector('#lucky');
			var opacity = 0;
			var fadeIn = setInterval(fade, 100);
			function fade() {
				if (opacity == 1) {
					clearInterval(fadeIn);
				} else {
					opacity += 0.03;
					lucky.style.opacity = opacity;
				}
			}
		}
		window.onload = setTimeout(displayLucky, 1000);

//DISPLAY a random number when clicking the buttons

	document.querySelector('#btn1').addEventListener('click', displayBtn1);
	function displayBtn1() {
		var nOne = document.querySelector('#n-one');
		var number1 = Math.floor(Math.random() * ((33-25) + 1) + 25);
		nOne.innerHTML = number1;
		nOne.style.display = 'block';
	}

	document.querySelector('#btn2').addEventListener('click', displayBtn2);
	function displayBtn2() {
		var nTwo = document.querySelector('#n-two');
		var number2 = Math.floor(Math.random() * ((49-41) + 1) + 41);
		nTwo.innerHTML = number2;
		nTwo.style.display = 'block';
	}

	document.querySelector('#btn3').addEventListener('click', displayBtn3);
	function displayBtn3() {
		var nThree = document.querySelector('#n-three');
		var number3 = Math.floor(Math.random() * ((8-1) + 1) + 1);
		nThree.innerHTML = number3;
		nThree.style.display = 'block';
	}

	document.querySelector('#btn4').addEventListener('click', displayBtn4);
	function displayBtn4() {
		var nFour = document.querySelector('#n-four');
		var number4 = Math.floor(Math.random() * ((40-34) + 1) + 34);
		nFour.innerHTML = number4;
		nFour.style.display = 'block';
	}

	document.querySelector('#btn5').addEventListener('click', displayBtn5);
	function displayBtn5() {
		var nFive = document.querySelector('#n-five');
		var number5 = Math.floor(Math.random() * ((24-17) + 1) + 17);		
		nFive.innerHTML = number5;
		nFive.style.display = 'block';
	}

	document.querySelector('#btn6').addEventListener('click', displayBtn6);
	function displayBtn6() {
		var nSix = document.querySelector('#n-six');
		var number6 = Math.floor(Math.random() * ((16-9) + 1) + 9);
		nSix.innerHTML = number6;
		nSix.style.display = 'block';
	}

