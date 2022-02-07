let root=document.querySelector('.container');


for(let house of got.houses)
{
  for(let person of house.people)
  {
    let div=document.createElement('div');
    div.classList.add('box');
    let img=document.createElement('img');
    img.src=person.image;
    img.classList.add('profile_pic')
    let h2=document.createElement('h2');
    h2.innerText=person.name;
    let para=document.createElement('p');
    para.innerText=person.description;
    para.classList.add('para');
    let btn=document.createElement('button');
    btn.textContent="Learn More!"
    btn.classList.add('btn');
    
    
    div.append(img,h2,para,btn);
    root.append(div);

  }
}



/*

      <li class="box">
        <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="pic">
        <h2>Eddard "Ned" Stark</h2>
        <h3>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</h3>
        <button>Learn More</button>
      </li>

*/