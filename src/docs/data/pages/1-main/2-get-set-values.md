## Get/set values and change event

<div data-examples="get-set-values"></div>

You can control the range slider by referencing the **tc-range-slider** HTML tag.

```html
<tc-range-slider id="slider-1"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-1');

    // listen to the change event
    $slider.addEventListener('change', (evt) => {
      console.log(evt.detail.value);
    });

    // change value
    $slider.value = 50;

    // or 
    // $slider.setAttribute('value', '50');

    // get value
    console.log($slider.value);
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider id="slider-1"></tc-range-slider>
    <div id="label-1" class="mt-6 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
</div>

Two pointers range slider example: 

```html
<tc-range-slider id="slider-2" value1="30" value2="70"></tc-range-slider>

<script src="toolcool-range-slider.min.js"></script>

<script>
    // get the reference
    const $slider = document.getElementById('slider-2');

    // listen to the change event
    $slider.addEventListener('change', (evt) => {
      console.log(evt.detail.value1, evt.detail.value2);

      // this array should not be changed directly
      console.log(evt.detail.values); 
    });

    // change values
    $slider.value1 = 40;
    $slider.value2 = 80;

    // or 
    // $slider.setAttribute('value1', '40');
    // $slider.setAttribute('value2', '80');

    // get values
    console.log($slider.value1, $slider.value2);
</script>
```

<div class="my-12 flex flex-col items-center">
    <tc-range-slider id="slider-2" value1="30" value2="70"></tc-range-slider>
    <div class="flex">
        <div id="label-2" class="mt-6 mr-2 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
        <div id="label-3" class="mt-6 ml-2 text-xs justify-center leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 w-24"></div>
    </div>
</div>




    