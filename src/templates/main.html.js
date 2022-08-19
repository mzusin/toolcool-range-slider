export default (styles) => {
  return `
    <style>
        ${styles}
    </style>
    
    <div class="range-slider" role="slider">
      <div class="container">
        <div class="panel"></div>
        <div class="panel-fill"></div>
    
        <div class="container">
          <div class="pointer" tabindex="0">
            <div class="pointer-shape"></div>
          </div>
        </div>
    
      </div>
    </div>`;
};
