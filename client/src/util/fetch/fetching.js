/* 
    global / helpers functions 
    @author: Luis Castillo
    @date 06-06-2018
    version: 0.3
*/
export const $ = (id) => document.getElementById(id);

export const generateJSON = (className) => {
    const inputs = Array.from(document.getElementsByClassName(className));
    let data = new Object();
    let propsName, propsValue;
    inputs.map(i => {
        propsName = i.id;
        propsValue = i.value;
        data["" + propsName + ""] = propsValue;
    })
    return data;
}

export const validateJSON = (data) => {
    for (let params in data) {
        if (data[params].length === 0) return true;
    }
    return false;
}

export const fetching = (data, method, url, cb) => {
    console.log('fetching!')
    switch (method) {
        case 'GET':
            {
                fetch(url, {
                    method: 'GET'
                })
                .then((res) => res.json())
                .then((data) => {
                    cb(data);
                })
                .catch((err) => {
                    alert('Error while request...' + err.message);
                })
                break;
            }

        case 'POST':
            {
                console.log('posting')
                let datajson = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    withCredentials: true,
                    credentials: 'same-origin',
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    }
                };
                fetch(url, datajson)
                .then((res) => res.text())
                .then((data) => {
                    console.log(data);                    
                    cb(data);
                })
                .catch((err) => {
                    console.log('here error')
                    console.log(err);
                })
                break;
            }
    }

}
