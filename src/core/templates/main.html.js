export default (styles, linkHrefs) => {
  return `
    <style>
        ${styles}
    </style>
    
    ${ linkHrefs && linkHrefs.length > 0 ? linkHrefs.map(linkHref => `<link rel="stylesheet" href="${ linkHref }" />`).join('')  : '' }
    
    <div class="range-slider-box">
    
      <div class="row">
        <slot name="min-label"></slot>
        
        <div id="range-slider" class="range-slider">
          <div class="container">
            <div class="panel"></div>
            <div class="panel-fill"></div>
        
            <div class="container">
              <div class="pointer" tabindex="0" role="slider">
                <div class="pointer-shape"></div>
              </div>
            </div>
        
          </div>
        </div>
        
        <slot name="max-label"></slot>
      </div>
      
  </div>`;
};
