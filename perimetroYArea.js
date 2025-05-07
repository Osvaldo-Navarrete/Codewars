const areaOrPerimeter = (l, w) => {
    return l === w ? l*4 : l *2 +  w*2;
};

console.log(areaOrPerimeter(6, 10))