import axios from "axios";

const downloadFile = (url: string,filename:string) => {
    debugger;
    if (!url) {
        return
    }

    axios.get(url,
        {
            responseType: 'blob',
        })
        .then(response => response.data)
        .then(blob => {
            const type = blob.type;
            let typefile = "";
            const index = type.lastIndexOf("/");
            if (index !== -1) {
                typefile = type.substr(index + 1);
            }
            let arrType = ["jpg", "jpeg", "png", "pdf"];
            const link = document.createElement('a');
            if (arrType.includes(typefile)) {
                const url = window.URL.createObjectURL(blob);
                link.href = url;
            }
            else {
                link.href = url;
            }
            link.setAttribute('download', filename + '.' + typefile); //or any other extension
            document.body.appendChild(link);
            link.click();
        }
        );
    //.catch((error) => console.log(error));
}

export default downloadFile