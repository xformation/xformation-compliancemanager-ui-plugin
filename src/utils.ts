import axios from "axios";

export class Utils {
  static postReq(url: any, data: any, callback: any) {
    console.log("Req: " + url + "\n" + data);
    axios
      .post(url, data)
      .then(response => {
        callback(response);
      })
      .catch(error => {
        console.log("POST Err: ", error);
        callback(null, error);
      });
  }

  static getReq(url: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          crossdomain: true
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log("GET Err: ", error);
          reject(error);
        });
    });
  }
}
