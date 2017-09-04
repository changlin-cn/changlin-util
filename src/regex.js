let regex={
    number:/^-?((\d+(\.\d*)?)|(\.\d+))$/,
    empty:/^[\s\S]{0}$/,
    integer:/^-?\d+\.?$/,
    positiveInteger:/^0*[1-9]+\d*$/,
    positiveNumber:/^((0*\.0*[1-9]\d*)|(0*[1-9]\d*(\.\d*)?))$/,
    url:/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/,
    tel:/^((\d{6,11})|((\d{2,4}-?)?(\d{2,4}-?)?\d{6,11})|(([(（]\d{2,4}[)）])?\d{6,11})|((\+?\d{2,4}-?)?1\d{10}))$/,
    mobilePhone:/^(\+?\d{2,4})?1\d{10}$/,
    email:/^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@((([a-z0-9]*[-_]?[a-z0-9]+)+([\.][a-z]{2,4}){1,2})|(\d{1,3}(\.\d{1,3}){3,5}))$/i
};

export {regex}

