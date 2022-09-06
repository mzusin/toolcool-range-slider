import { TypeEnum } from '../enums/type-enum';

export interface IPanelFill {
  updatePosition: (type: TypeEnum, percent1: number, percent2: number | undefined, rightToLeft: boolean, bottomToTop: boolean) => void;
}

export const PanelFill = ($fill: HTMLElement) : IPanelFill => {

  const updatePosition = (type: TypeEnum, percent1: number, percent2: number | undefined, rightToLeft: boolean, bottomToTop: boolean) => {

    if (type === TypeEnum.Vertical) {
      $fill.style.removeProperty('width');
      $fill.style.removeProperty('right');
      $fill.style.removeProperty('left');

      if (percent2 !== undefined) {
        $fill.style.height = `${Math.abs(percent1 - percent2)}%`;
      }
      else{
        $fill.style.height = `${ percent1 }%`;
      }

      if (bottomToTop) {
        $fill.style.bottom = '0%';

        if (percent2 !== undefined) {
          $fill.style.top = `${Math.min(100 - percent2, 100 - percent1)}%`;
        }
        else{
          $fill.style.top = 'auto';
        }
      }
      else {
        $fill.style.bottom = 'auto';

        if (percent2 !== undefined) {
          $fill.style.top = `${Math.min(percent1, percent2)}%`;
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

      if (percent2 !== undefined) {
        $fill.style.width = `${ Math.abs(percent1 - percent2) }%`;
      }
      else{
        $fill.style.width = `${ percent1 }%`;
      }

      if (rightToLeft) {
        $fill.style.right = '0%';

        if (percent2 !== undefined) {
          $fill.style.left = `${ Math.min(100 - percent2, 100 - percent1) }%`;
        }
        else{
          $fill.style.left = 'auto';
        }
      }
      else {
        $fill.style.right = 'auto';

        if (percent2 !== undefined) {
          $fill.style.left = `${ Math.min(percent1, percent2) }%`;
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