import COS from "cos-js-sdk-v5";

export const upload_imgs = function (files: any) {
  return new Promise((resolve) => {
    var cos = new COS({
      // SecretId: "AKIDeEdomV3OVO5aS6XkncyFLEtMhroZ7Vhh",
      // SecretKey: "rUvHQyLWTyIVWJrCQQ9g6OVO4WjlaDeq",
    });
    let upload_files_data = files.map((item: any) => {
      const file_name = item.name;
      const random = Math.random().toString(36).slice(-8);
      const result_file_name = `topic/${random}_${file_name}`;

      return {
        Bucket: "masterye-1322546226",
        Region: "ap-nanjing",
        Key: result_file_name,
        Body: item.originFileObj,
        SliceSize: 1024 * 1024 * 5,
      };
    });
    console.log(upload_files_data);
    cos.uploadFiles(
      {
        files: upload_files_data,
        SliceSize: 1024 * 1024 * 10,
        onFileFinish: function (err, data, option) {
          console.log(option.Key + "上传" + (err ? "失败" : "完成"));
        },
      },
      async function (err, res_data) {
        if (err) {
          console.log(err);
        } else {
          console.log(res_data);
          const img_urls = res_data.files.map((item) => {
            return item.data.Location;
          });
          resolve(img_urls);
        }
      }
    );
  });
};
