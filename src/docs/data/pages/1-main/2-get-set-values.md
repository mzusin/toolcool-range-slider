## Get/set values and change event

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
<script>
    try{
        const $slider1 = document.getElementById('slider-1');
        const $label1 = document.getElementById('label-1');
        $slider1.addEventListener('change', (evt) => {
            $label1.textContent = evt.detail.value;
        });
        $slider1.value = 50;
    } catch(ex) { console.error(ex); }
</script>




    