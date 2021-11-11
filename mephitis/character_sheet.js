function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('name');
    const formJSON = Object.fromEntries(data.entries());

    console.log({ formJSON });

    const charName = data.get('name');
    var date = new Date().toLocaleString();
    const results = JSON.stringify(formJSON, null, 2);

    download(charName + "_" + date + '.json', results);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  
function textReplace(element) {
    var terms = ['/success/', '/failure/', '/survival/', '/skill/', '/mastery/', '/difficulty/', '/depletion/', '/damage/', '/risk/', '/stress/'];
    var replacements = ['🟢', '🔴', '🔶', '🟩', '🟦', '⬛️', '⬜', '🟥', '⚠', '💢'];

    for(var i = 0; i < replacements.length; i++) {
        var originalText = document.getElementById(element).value;
        var re = new RegExp(terms[i], 'g');
        var newText = originalText.replace(re, replacements[i]);
        document.getElementById(element).value = newText;
    }
}

function changeName() {
  var targetDiv = document.getElementById('nameEdit');
  if (targetDiv.style.visibility !== "hidden") {
    targetDiv.style.visibility = "hidden";
  } else {
    targetDiv.style.visibility = "visible";
  }
}

function saveName() {
  var name = document.getElementById('name').value;
  if (name.length == 0) {
    name = 'Summary';
  } 
  document.getElementById('nameHeading').innerHTML = name;
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

const streamToText = async (blob) => {
    const readableStream = await blob.getReader();
    const chunk = await readableStream.read();

    return new TextDecoder('utf-8').decode(chunk.value);
  };

  const bufferToText = (buffer) => {
    const bufferByteLength = buffer.byteLength;
    const bufferUint8Array = new Uint8Array(buffer, 0, bufferByteLength);

    return new TextDecoder().decode(bufferUint8Array);
  };

  document.getElementById('loadCharacter').addEventListener('change', function(e) {
    let file = document.getElementById('loadCharacter').files[0];

    (async () => {
      const fileContent = await file.text();

      console.log(fileContent);

      var obj = JSON.parse(fileContent);

      console.log(obj.name);
      
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            document.getElementsByName(key)[0].value = obj[key];
        }
    }
    saveName();
    })();
  });

  function changeStyle(style) {
    var sel = window.getSelection(); // Gets selection
    if (sel.rangeCount) {
      // Creates a new element, and insert the selected text with the chosen style
      var e = document.createElement('span');
      e.classList.add(style.value); // Selected style (class)
      e.innerHTML = sel.toString(); // Selected text
  
      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      var range = sel.getRangeAt(0);
      range.deleteContents(); // Deletes selected text…
      range.insertNode(e); // … and inserts the new element at its place
    }
  }