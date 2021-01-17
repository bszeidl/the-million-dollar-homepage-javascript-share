function onload() {
	let root = document.getElementById("root");

	/*area to drop files */
		root.insertAdjacentHTML('beforeend', '<div id="drop_area"></div>');
		let dropArea = document.querySelector('#drop_area'); 

	/*drag abd drop message */
		dropArea.insertAdjacentHTML('afterbegin', '<h1 id="drop_message"></h1>');
		let dropMessage = document.querySelector('#drop_message');
		dropMessage.innerHTML = 'Drag & Drop images and click on the button to upload!';

	/* input tag and its property settings */
		dropArea.insertAdjacentHTML('beforeend', '<input id="drop-input">');
		let dropInputTag = document.querySelector('#drop-input');
		dropInputTag.type = 'file';
		dropInputTag.accept = 'imgage/*';
		dropInputTag.multiple = true;
		
		

	/*area to preview images */
		root.insertAdjacentHTML('afterbegin', '<div id="preview_area"></div>');
		let previewArea = document.querySelector('#preview_area');
		
	
		previewArea.insertAdjacentHTML('afterbegin', '<h2 class="preview-title"></h2>');
		let previewTitle = document.querySelector('.preview-title');
		previewTitle.innerHTML = "Image preview";
	
	/*Upload button*/
		root.insertAdjacentHTML('beforeend', '<button class="button">Upload</button>');
		let uploadButton = document.querySelector('.button');

	
	/* function to select image from the file browser with clicking on the file */
		/*dropInputTag.addEventListener('change', selectImg);*/
	
		/*var imageToUpload = [];*/
		
	/*	function selectImg() {
		imageToUpload.push(dropInputTag.value);
		
		console.log(imageToUpload);
		console.log(imageToUpload.length);
		
	}*/
	
		dropInputTag.addEventListener('change', imagePreviewer);

	

/*????? Miért mindig 1 a fileList.length, amikor több file is van benne?*/
		dropInputTag.addEventListener('change', handleFiles);
		 function handleFiles() {
			 let fileList = [];
			 fileList.push(dropInputTag);
			  console.log(fileList.length);
		 }
		 
		 
	
		previewArea.insertAdjacentHTML('beforeend', '<div class="img-wrapper"></div>');
		let imgWrap = document.querySelector('.img-wrapper');

		previewArea.insertAdjacentHTML('beforeend', '<div class="pre-upload-message">No image yet selected</div>');
		let preUploadMessage = document.querySelector('.pre-upload-message');
		
	function imagePreviewer() {
		let selectedFiles = dropInputTag.files;
		preUploadMessage.remove();
						
		imgWrap.insertAdjacentHTML('afterbegin', '<div class="img-cont"></div>');
		let imgCont = document.querySelector('.img-cont');

		for (let file of selectedFiles) {		
				
			imgCont.insertAdjacentHTML('beforeend', '<p class="img-file-name"></p>')	;	
			let imgFileName = document.querySelector('.img-file-name');		
			imgFileName.textContent = file.name;		
							
			imgCont.insertAdjacentHTML('afterbegin', '<img class="image">');		
			let image = document.querySelector('.image');		
			image.src = URL.createObjectURL(file);									
		}						
	}

	uploadButton.addEventListener('click', fakeUpload);
	
	function fakeUpload() {
		let uploadMessage = "Images uplodad!"
		imgWrap.innerHTML = uploadMessage;
	}
			
		
			


	
	

	
	
	/*Watch the change of the files
	dropInputTag.addEventListener('change', function() {
		var files = dropInputTag.files;
		handleFiles(file);
	}); */

	
	/*prevent that drag and drop open file browser
	function preventDefault(e) {
		e.preventDefault();
		e.stopPropagation();
	}*/

	/*event listener on drop area to watch the drag variations
	dropArea.addEventListener('dragenter', preventDefault);
	dropArea.addEventListener('dragleave', preventDefault);
	dropArea.addEventListener('dragover', preventDefault);
	dropArea.addEventListener('drop', preventDefault);*/

	/*dataTransfer definition to capture draged files
	function handleDrop(e) {
		var data = e.dataTransfer();
		files = data.files;
		handleFiles(files);
	}
	dropArea.addEventListener('drop', handleDrop, false);*/


	/*To validate dropped image that they are really img files
	function handleFiles(files) {
		for (i = 0; i < length.files; i++) {
				if(validateImage(files[i]))
					previewAndUploadImage(files[i]);
		}
	}

	function validateImage() {
		var validImage = ['image/jpeg', 'image/png', 'image/tif'];
		if(validImage.indexOf(image.type) === -1 ) {
			alert('Invalid file type');
			return false;
		}

		var maxImgSize = 10e6;
		if (image.size > maxImgSize) {
			alert('To big file size!');
			return false;
		}

		return true;
	}*/

	/*Preview image function
	function previewAndUploadImage(image) {
		previewArea.insertAdjacentHTML('afterbegin', '<img>');
		previewArea.insertAdjacentHTML('beforeend', '<div class="overlay"></div>');

		var reader = FileReader();
		reader.onload = function(e) {
		img.src = e.target.result;
		}
		reader.readAsDataUrl(image);

		// create FormData
    var formData = new FormData();
    formData.append('image', image);
 
    // upload the image
    var uploadLocation = 'UPLOAD_LOCATION';
 
    var ajax = new XMLHttpRequest();
    ajax.open("POST", uploadLocation, true);
 
    ajax.onreadystatechange = function(e) {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                // done!
            } else {
                // error!
            }
        }
    }
 
    ajax.upload.onprogress = function(e) {
 
        // change progress
        // (reduce the width of overlay)
 
        var perc = (e.loaded / e.total * 100) || 100,
            width = 100 - perc;
 
        overlay.style.width = width;
    }
 
    ajax.send(formData); 
	}*/

	
	


}

window.addEventListener('load', onload);