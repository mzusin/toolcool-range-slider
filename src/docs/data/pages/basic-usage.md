<h2>Basic Usage</h2>
<p>Download the latest <a href="https://github.com/toolcool-org/toolcool-range-slider/blob/main/dist/toolcool-range-slider.min.js">toolcool-range-slider.min.js</a> script:</p>
<p>Add the following html to the page:</p>
<pre><code class="language-html">&lt;toolcool-range-slider&gt;&lt;/toolcool-range-slider&gt;

&lt;script type=&quot;text/javascript&quot; src=&quot;toolcool-range-slider.min.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>Or alternatively:</p>
<pre><code class="language-html">&lt;tc-range-slider&gt;&lt;/tc-range-slider&gt;

&lt;script type=&quot;text/javascript&quot; src=&quot;toolcool-range-slider.min.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>You can control the range slider by referencing the <code>toolcool-range-slider</code> HTML tag.</p>
<pre><code class="language-html">&lt;toolcool-range-slider id=&quot;slider-1&quot;&gt;&lt;/toolcool-range-slider&gt;

&lt;script type=&quot;text/javascript&quot; src=&quot;toolcool-range-slider.min.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change value
    $slider.value = 50;
    
    // or 
    // $slider.setAttribute('value', '50');
    
    // get value
    console.log($slider.value);

    // listen to the change event
    $slider.addEventListener('change', (evt) =&gt; {
      const value = Math.round(evt.detail.value);
      console.log(value);
    });
&lt;/script&gt;
</code></pre>
<p>The value label can also be automatically bound using the <strong>value-label</strong> attribute:</p>
<pre><code class="language-html">&lt;toolcool-range-slider value-label=&quot;.value-1&quot;&gt;&lt;/toolcool-range-slider&gt;

&lt;div class=&quot;value-1&quot;&gt;&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot; src=&quot;toolcool-range-slider.min.js&quot;&gt;&lt;/script&gt;
</code></pre>
<p>Range slider <strong>with two pointers</strong> can be created by adding the <strong>value2</strong> parameter:</p>
<pre><code class="language-html">&lt;toolcool-range-slider min=&quot;0&quot; max=&quot;100&quot; value=&quot;30&quot; value2=&quot;60&quot;&gt;&lt;/toolcool-range-slider&gt;
</code></pre>
<p>It's also possible to use <strong>value1</strong> instead of value:</p>
<pre><code class="language-html">&lt;toolcool-range-slider min=&quot;0&quot; max=&quot;100&quot; value1=&quot;30&quot; value2=&quot;60&quot;&gt;&lt;/toolcool-range-slider&gt;
</code></pre>
<blockquote>
<p><strong>value1</strong> is just an alias of the <strong>value</strong> property.</p>
</blockquote>
<p>Two pointers range slider API example:</p>
<pre><code class="language-html">&lt;toolcool-range-slider id=&quot;slider-1&quot; value1=&quot;10&quot; value2=&quot;50&quot;&gt;&lt;/toolcool-range-slider&gt;

&lt;script type=&quot;text/javascript&quot; src=&quot;toolcool-range-slider.min.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
    // get the reference
    const $slider = document.getElementById('slider-1');
    
    // change values
    $slider.value = 60;
    $slider.value2 = 70;

    // or 
    // $slider.setAttribute('value', '60');
    // $slider.setAttribute('value2', '70');
    
    // get values
    console.log($slider.value);
    console.log($slider.value2);

    // listen to the change event
    $slider.addEventListener('change', (evt) =&gt; {
      console.log(evt.detail.value);
      console.log(evt.detail.value2);
    });
&lt;/script&gt;
</code></pre>
<p>:star: <strong>It's also possible to generate min, max, and value labels automatically.</strong>  <a href="#automatically-generated-labels">Click here for more details.</a></p>
<p>:pushpin: More examples with automatic label binding can be found <a href="https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/8-automatic-labels-binding.html">here</a>.</p>
<p>:pushpin: Examples with js binding can be found <a href="https://github.com/toolcool-org/toolcool-range-slider/blob/main/examples/1-basic.html">here</a>.</p>
