// step is defined in absolute units, not percent
export type TStep = ((value: number | string, percent: number) => number) | number | undefined | null;
export type TData = (string | number)[] | undefined;

export type DynamicFields = {
  // permit any property like `value${ index + 1 }`
  value: string | number | undefined;
  [name: `value${number}`]: string | number | undefined;

  // permit any property like `ariaLabel${ index + 1 }`
  ariaLabel: string | number | undefined;
  [name: `ariaLabel${number}`]: string | null | undefined;

  // permit any property like `pointerShape${ index + 1 }`
  pointerShape: string | number | undefined;
  [name: `pointerShape${number}`]: string | null;

  // permit any property like `pointer${ index + 1 }Disabled`
  pointerDisabled: string | number | undefined;
  [name: `pointer${number}Disabled`]: boolean;

  // dynamic styles -----------------------------
  sliderWidth: string | number | null | undefined;
  sliderHeight: string | number | null | undefined;
  sliderRadius: string | number | null | undefined;
  sliderBg: string | null | undefined;
  sliderBgHover: string | null | undefined;
  sliderBgFill: string | null | undefined;

  pointerWidth: string | number | null | undefined;
  [name: `pointer${number}Width`]: string | number| undefined | null;

  pointerHeight: string | number | null | undefined;
  [name: `pointer${number}Height`]: string | number| undefined | null;

  pointerRadius: string | number | null | undefined;
  [name: `pointer${number}Radius`]: string | number| undefined | null;

  pointerBg: string | null | undefined;
  [name: `pointer${number}Bg`]: string | undefined | null;

  pointerBgHover: string | null | undefined;
  [name: `pointer${number}BgHover`]: string| undefined | null;

  pointerBgFocus: string | null | undefined;
  [name: `pointer${number}BgFocus`]: string| undefined | null;

  pointerShadow: string | null | undefined;
  [name: `pointer${number}Shadow`]: string | undefined | null;

  pointerShadowHover: string | null | undefined;
  [name: `pointer${number}ShadowHover`]: string | undefined | null;

  pointerShadowFocus: string | null | undefined;
  [name: `pointer${number}ShadowFocus`]: string | undefined | null;

  pointerBorder: string | number | null | undefined;
  [name: `pointer${number}Border`]: string | number| undefined | null;

  pointerBorderHover: string | number | null | undefined;
  [name: `pointer${number}BorderHover`]: string | number| undefined | null;

  pointerBorderFocus: string | number | null | undefined;
  [name: `pointer${number}BorderFocus`]: string | number| undefined | null;
};
