# Projects related to DOM

## project link
[Click here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
   // if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
   // }
  })

});


```

## project 2
# solution

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  }else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
  }

});
```
## project 3
# solution

```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')
setInterval(function(){
  let date = new Date();
//console.log(date. toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

},1000);

```
## project 6 [Infinite Colors]
# solution

```javascript

    const randomColor = function () {
      const hex = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    let intervalId; // Store the interval so we can stop it later

    const startChangingColor = function () {
      if(!intervalId)
      intervalId = setInterval(changeBgColor ,900);

      function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
      }
    };

    const stopChangingColor = function () {
      clearInterval(intervalId);
      intervalId = null;
    };

    document.querySelector("#start").addEventListener("click", startChangingColor);
    document.querySelector("#stop").addEventListener("click", stopChangingColor);
 ```
## project 5 [keycode]
# solution
```javascript
console.log('Project 5');
const insert = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
      <td>Key</td>
      <td>Keycode</td>
      <td>code</td>
    </tr>
    <tr>
      <td>${e.key === ' '?'space':e.key}</td> 
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

  `
})
```
