let timer = 0;
			let image = 0;
		
			for(let i = 0; i < 3; i++) {
				timer++;
				console.log(timer);
				if(timer >= 3) {
					image++;
					timer = 0;
				}
		
				if(image >= 3) {
					image = 0;
				}
				if(image == 0) {
				document.getElementById("image1").style.display = "none";
			}
		}