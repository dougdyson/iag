function readJSONFile(file, callback){
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4 && rawFile.status == "200"){
        callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

function newStatement(){
  const statement = document.getElementById("statement");
  const wordsBtn  = document.getElementById("words");
  
  // disable button and display intialization message
  wordsBtn.disabled   = true;
  statement.innerHTML = 'Generating...';

  // TODO: make sure the two random quotes are not the same quote
  
  readJSONFile('./data/data.json', (text) => {
    const statements  = JSON.parse(text);
    const randomIndex = (array) => Math.floor(Math.random() * (array.length));
    
    // display concatenated statement, re-enable button, set focus to action button
    setTimeout(() => {
      statement.innerHTML = statements[randomIndex(statements)].quote
                            + ' ' 
                            + statements[randomIndex(statements)].quote;
      wordsBtn.disabled   = false;
      document.getElementById("action").focus();
      }, 
      500 // millisecond delay for animation
    ); 
  });
};