function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('name');
    const formJSON = Object.fromEntries(data.entries());

    console.log({ formJSON });

    const charName = data.get('name');
    const results = JSON.stringify(formJSON, null, 2);

    download(charName + '.json', results);
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
    })();

    
  });