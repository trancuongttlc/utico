function apiModifyTable(originalData,id,response) {
    angular.forEach(originalData, function (item,key) {
        if(item.id == id) {
            originalData[key] = response;
        }
    });
    return originalData;
}

function bindKey(str, data) {
    return str.replace(/{([^{}]*)}/g,
        function(a, b) {
            var r = data[b];
            if (r === undefined) r = '{' + b + '}';
            return typeof r === 'string' ? r : "" + r;
        }
    );
}

function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    // create a view into the buffer
    var ia = new Uint8Array(ab);
    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], {type: mimeString});
    
    return blob;
}

function getBase64Image() {
    var can = document.getElementById("imgCoverCanvas");
    var img = document.getElementById("base64_cover_convert");
    var ctx = can.getContext("2d");
    ctx.drawImage(img, 10, 10);
    var encodedBase = can.toDataURL();

    return encodedBase;
}

function encodeImage(imageUri, callback) {
    var c = document.getElementById("imgCoverCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
        c.width = this.width;
        c.height = this.height;
        ctx.drawImage(img, 0, 0);
        var dataURL = c.toDataURL("image/png");
        callback(dataURL);
    };
    img.src = imageUri;
}

function convertNumToTime(a) {
    var s = a / 1000;
    var m = s / 60;
    var h = m / 60;
    var d = h / 24;
    var w = d / 7;
    var m = w / 4;
    var y = m / 12;

    if( y > 1){
        return Math.ceil(y) + ' n??m tr?????c';
    }
    else if( m > 1){
        return Math.ceil(m) + ' th??ng tr?????c';
    }
    else if( w > 1){
        return Math.ceil(w) + ' tu???n tr?????c';
    }
    else if( d > 1){
        return Math.ceil(d) + ' ng??y tr?????c';
    }
    else if( h > 1){
        return Math.ceil(h) + ' gi??? tr?????c';
    }
    else{
        return Math.ceil(m) + ' ph??t tr?????c';
    }
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

