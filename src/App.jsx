const element = (
  <div>
  <div id="out">
    <h4 id="name_component">Harsh Shah</h4>
  </div>
  <div id="image_out">
    <img id="img"src="image.jpg" />
    </div>
    <div id="intro_out">
      <p id="intro_component">I am graduate student at San Diego State. I love reading books and playing cricket during my free time.</p>
    </div>
    <div id="button_out">
      <a href="https://github.com/Harsh7261">
        <button id="button_component">GITHUB REPO</button>
      </a>
    </div>
  
  </div>
);

ReactDOM.render(element, document.getElementById('contents'));