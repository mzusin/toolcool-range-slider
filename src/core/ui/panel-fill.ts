import * as TypeEnum from '../enums/type-enum';

export interface IPanelFill {
  updatePosition: (type: string, percents: (number | undefined)[], rightToLeft: boolean, bottomToTop: boolean) => void;
}

export const PanelFill = ($fill: HTMLElement) : IPanelFill => {

  const updatePosition = (type: string, percents: (number | undefined)[], rightToLeft: boolean, bottomToTop: boolean) => {

    if(percents.length <= 0) return;

    const oneOnly = percents.length === 1;
    const first = percents[0] as number;
    const last = percents[percents.length - 1] as number;

    if (type === TypeEnum.Vertical) {
      $fill.style.removeProperty('width');
      $fill.style.removeProperty('right');
      $fill.style.removeProperty('left');

      if (!oneOnly) {
        $fill.style.height = `${Math.abs(first - last)}%`;
      }
      else{
        $fill.style.height = `${ first }%`;
      }

      if (bottomToTop) {
        $fill.style.bottom = '0%';

        if (!oneOnly) {
          $fill.style.top = `${Math.min(100 - last, 100 - first)}%`;
        }
        else{
          $fill.style.top = 'auto';
        }
      }
      else {
        $fill.style.bottom = 'auto';

        if (!oneOnly) {
          $fill.style.top = `${Math.min(first, last)}%`;
        }
        else{
          $fill.style.top = '0%';
        }
      }
    }
    else {
      $fill.style.removeProperty('height');
      $fill.style.removeProperty('top');
      $fill.style.removeProperty('bottom');

      if (!oneOnly) {
        $fill.style.width = `${ Math.abs(first - last) }%`;
      }
      else{
        $fill.style.width = `${ first }%`;
      }

      if (rightToLeft) {
        $fill.style.right = '0%';

        if (!oneOnly) {
          $fill.style.left = `${ Math.min(100 - last, 100 - first) }%`;
        }
        else{
          $fill.style.left = 'auto';
        }
      }
      else {
        $fill.style.right = 'auto';

        if (!oneOnly) {
          $fill.style.left = `${ Math.min(first, last) }%`;
        }
        else{
          $fill.style.left = '0%';
        }
      }
    }
  };

  return {
    updatePosition,
  };
};