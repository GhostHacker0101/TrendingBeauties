let i =0
let first =document.getElementById('container')

let images =new Image('chinki.jpeg')
images=[
   
    {filepath:`chinki.jpeg`},
    {filepath:`chinki${i+1}.jpeg`},
    {filepath:`chinki${i+2}.jpeg`},
    {filepath:`chinki${i+3}.jpeg`},
    {filepath:`chinki${i+4}.jpeg`},
    {filepath:`chinki${i+5}.jpeg`},
    {filepath:`chinki${i+6}.jpeg`},
    {filepath:`chinki${i+7}.jpeg`},
    {filepath:`chinki${i+8}.jpeg`}

]

for(i;i<images.length;i++){
    
    let div = document.createElement('div')
    div.classList.add('divbox')
    let img = document.createElement('img')
    img.id='first'+i
    
    img.style.maxWidth='400px'
    img.style.maxHeight='600px'
    img.src=images[i].filepath
    let btn = document.createElement('button')
    btn.id='btn'+i
    btn.classList.add('btncss')
    btn.innerText='Download'
    
    btn.addEventListener('click', function() {
        let a = document.createElement('a');
        a.href = img.src;
        a.download = 'image';
        a.click();
    });
    first.appendChild(div)
    div.appendChild(img)
    div.appendChild(btn)
}