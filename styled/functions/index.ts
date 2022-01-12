
export const rem = ( pixel: number) =>{
  const quotient = pixel / 16;

  return `${quotient}rem`;
}

export const fluid = ( min: number, pref: number, max: number ) =>{

  return `clamp(${rem(min)}, ${pref + "vw"}, ${rem(max)})`;
} 