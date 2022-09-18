export default (styles, linkHrefs) => {
  return `
    ${ linkHrefs && linkHrefs.length > 0 ? linkHrefs.map(linkHref => `<link rel="stylesheet" href="${ linkHref }" />`).join('')  : '' }
    
    <style>
        ${styles}
    </style>
    
    <div class="range-slider-box">
    
      <div class="row">
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
      </div>
      
  </div>`;
};
