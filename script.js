  window.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const inputContainer = document.getElementById('input-container');
    let fieldCounter = 1;

    addButton.addEventListener('click', function() {
      const newFieldDiv = document.createElement('div');
      newFieldDiv.classList.add('dynamic-field');

      const companyNameLabel = document.createElement('label');
      companyNameLabel.textContent = 'Company Name';
      const companyNameInput = document.createElement('input');
      companyNameInput.setAttribute('type', 'text');
      companyNameInput.setAttribute('placeholder', 'Company Name');

      const postLabel = document.createElement('label');
      postLabel.textContent = 'Post';
      const postInput = document.createElement('input');
      postInput.setAttribute('type', 'text');
      postInput.setAttribute('placeholder', 'Post');

      const descriptionLabel = document.createElement('label');
      descriptionLabel.textContent = 'Description';
      const descriptionTextarea = document.createElement('textarea');
      descriptionTextarea.setAttribute('placeholder', 'Description');
      descriptionTextarea.setAttribute('cols', '30');
      descriptionTextarea.setAttribute('rows', '5');

      newFieldDiv.appendChild(companyNameLabel);
      newFieldDiv.appendChild(companyNameInput);
      newFieldDiv.appendChild(postLabel);
      newFieldDiv.appendChild(postInput);
      newFieldDiv.appendChild(descriptionLabel);
      newFieldDiv.appendChild(descriptionTextarea);

      inputContainer.appendChild(newFieldDiv);
      fieldCounter++;
    });
  });

  window.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-qual');
    const piDiv = document.querySelector('#cunt');
    let fieldCounter = 1;

    addButton.addEventListener('click', function() {
      const newQualificationDiv = document.createElement('div');
      newQualificationDiv.classList.add('qualification');

      const instituteLabel = document.createElement('label');
      instituteLabel.textContent = 'Institute Name';
      const instituteInput = document.createElement('input');
      instituteInput.setAttribute('type', 'text');
      instituteInput.setAttribute('placeholder', 'Institute Name');

      const courseLabel = document.createElement('label');
      courseLabel.textContent = 'Course';
      const courseInput = document.createElement('input');
      courseInput.setAttribute('type', 'text');
      courseInput.setAttribute('placeholder', 'PCM, PCB, Commerce, etc');

      const startDateLabel = document.createElement('label');
      startDateLabel.textContent = 'Starting date';
      const startDateInput = document.createElement('input');
      startDateInput.setAttribute('type', 'date');

      const endDateLabel = document.createElement('label');
      endDateLabel.textContent = 'Ending date';
      const endDateInput = document.createElement('input');
      endDateInput.setAttribute('type', 'date');

      const achievementLabel = document.createElement('label');
      achievementLabel.textContent = 'Achievement';
      const achievementTextarea = document.createElement('textarea');
      achievementTextarea.setAttribute('placeholder', 'Achievement');
      achievementTextarea.setAttribute('cols', '5');
      achievementTextarea.setAttribute('rows', '5');

      newQualificationDiv.appendChild(instituteLabel);
      newQualificationDiv.appendChild(instituteInput);
      newQualificationDiv.appendChild(courseLabel);
      newQualificationDiv.appendChild(courseInput);
      newQualificationDiv.appendChild(startDateLabel);
      newQualificationDiv.appendChild(startDateInput);
      newQualificationDiv.appendChild(endDateLabel);
      newQualificationDiv.appendChild(endDateInput);
      newQualificationDiv.appendChild(achievementLabel);
      newQualificationDiv.appendChild(achievementTextarea);

      piDiv.appendChild(newQualificationDiv);
      fieldCounter++;
    });
  });


  function generateResume() {
      const fname = document.getElementById("fn").value;
      const lname = document.getElementById("ln").value;
      const email = document.getElementById("em").value;
      const phone = document.getElementById("phnu").value;
      const tell = document.getElementById("tell").value;
      const inst = document.getElementById("instiName").value;
      const gradYear = document.getElementById("sdate").value;
      const endyear = document.getElementById("edate")
      const LinkedIn = document.getElementById("linkin").value;
      const gitlink = document.getElementById("gitlink").value;
      const companyName = document.getElementById("cn").value;
      const post = document.getElementById("post").value;
      const dics = document.getElementById("disc").value;
      const course = document.getElementById("course").value;
      const achivment = document.getElementById("achi").value;

      const resumeContent = `
      <link rel="stylesheet" href="style1.css">
              <div class="res">
          <div class="leftblack">
              <img src="image/images.png" alt="">
              <div class="outer">
                  <h1>Contact</h1><hr>
                  <p>+91 ${phone}</p>
                  <p>${email}</p>
                  <h1>Education</h1><hr>
                  <p>${gradYear} , ${inst}</p>
                  <p>${gradYear} , ${inst}</p>
                  <h1>Langauage</h1><hr>
                  <p>Hindi</p>
                  <p>English</p>
                  <h1>Extra curricular</h1><hr>
                  <p>Cyclist</p>
                  <p>Online Gaming</p>
              </div>
          </div>
          <div class="rightwhite">
              <h1 class="heading" id="name"> ${fname} ${lname}</h1>
              <h3>LinkedIn Link : <span>${LinkedIn}</span></h3>
              <h3 class="heading3">GitHub Link : <span>${gitlink}</span></h3><br>
              <h1>Tell me about Yourself</h1><hr>
              <div class="vl">
                  <p>${tell}</p>
              </div>
              <h1>Experience</h1>
              <hr>
              <div class="vl">
                  <p class="para">${companyName}</p>
                  <p >${post}</p>
                  <p class="para">${dics}</p>
              </div>
              <br>
              <h1>Academic Qualification</h1><hr>
              <div class="vl">
                  <p >${inst}</p>
                  <p class="para">${course}</p>
                  <p><span>${gradYear}</span> - <span>${endyear}</span></p>
                  <p class="para">${achivment}</p>
              </div>
              <br>
          </div>
      </div>
      `;

      // Open a new window to display the generated resume
      const newWindow = window.open();
      newWindow.document.write(resumeContent);
  }
