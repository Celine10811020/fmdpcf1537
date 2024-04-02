function encode()
{
  document.getElementById('Copy').style.visibility = 'visible';

  inputString = document.getElementById("InputString").value;
  outputString = "";
  seed = document.getElementById("Seed").value;

  seed = parseInt(seed);

  for (var i=0; i<inputString.length; i++)
  {
    char = inputString.substring(i, i+1)
    index = refStr.indexOf(char)
    newIndex = index^seed;
    outputString += refStr.substring(newIndex, newIndex+1);
  }

  document.getElementById("OutputString").innerHTML = "輸出字串：" + String(outputString);
}

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(outputString.toString());
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function clearString()
{
   document.getElementById('InputString').value = "";
}
function clearSeed()
{
   document.getElementById('Seed').value = "";
}
