const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { querySQL } = require("./config/mysql");
const { compressImage } = require('./middleware/compressImage');

const s3 = new AWS.S3();

const keys = [

  {
      "filename": "1699586108062.jpeg",
      "size": 3865773
  },
  {
      "filename": "1699586110797.jpeg",
      "size": 3534685
  },
  {
      "filename": "1699586112696.jpeg",
      "size": 2737960
  },
  {
      "filename": "1699586250712.jpeg",
      "size": 359899
  },
  {
      "filename": "1699586253035.jpeg",
      "size": 212798
  },
  {
      "filename": "1699586253146.jpeg",
      "size": 262544
  },
  {
      "filename": "1699586527723.jpeg",
      "size": 652866
  },
  {
      "filename": "1699586528414.jpeg",
      "size": 1065488
  },
  {
      "filename": "1699586528945.jpeg",
      "size": 572149
  },
  {
      "filename": "1699586600898.jpeg",
      "size": 3084342
  },
  {
      "filename": "1699586602653.jpeg",
      "size": 2879973
  },
  {
      "filename": "1699586604069.jpeg",
      "size": 2557615
  },
  {
      "filename": "1699586765435.jpeg",
      "size": 226395
  },
  {
      "filename": "1699586765929.jpeg",
      "size": 205779
  },
  {
      "filename": "1699586766084.jpeg",
      "size": 215599
  },
  {
      "filename": "1699586986477.jpeg",
      "size": 721355
  },
  {
      "filename": "1699586987213.jpeg",
      "size": 719642
  },
  {
      "filename": "1699586987737.jpeg",
      "size": 215599
  },
  {
      "filename": "1699587520647.jpeg",
      "size": 5244426
  },
  {
      "filename": "1699587883391.jpeg",
      "size": 199917
  },
  {
      "filename": "1699587884038.jpeg",
      "size": 164916
  },
  {
      "filename": "1699587884607.jpeg",
      "size": 165521
  },
  {
      "filename": "1699588863764.jpeg",
      "size": 97413
  },
  {
      "filename": "1699588864137.jpeg",
      "size": 166512
  },
  {
      "filename": "1699588864574.jpeg",
      "size": 94441
  },
  {
      "filename": "1699588918414.jpeg",
      "size": 237187
  },
  {
      "filename": "1699588918755.jpeg",
      "size": 269951
  },
  {
      "filename": "1699588960252.jpeg",
      "size": 92911
  },
  {
      "filename": "1699588992752.jpeg",
      "size": 141023
  },
  {
      "filename": "1699589022633.jpeg",
      "size": 228482
  },
  {
      "filename": "1699589065580.jpeg",
      "size": 151001
  },
  {
      "filename": "1699589097738.jpeg",
      "size": 137697
  },
  {
      "filename": "1699589098089.jpeg",
      "size": 122462
  },
  {
      "filename": "1699589219887.jpeg",
      "size": 481182
  },
  {
      "filename": "1699589220480.jpeg",
      "size": 313365
  },
  {
      "filename": "1699589220632.jpeg",
      "size": 436135
  },
  {
      "filename": "1699589559723.jpeg",
      "size": 4099048
  },
  {
      "filename": "1699590115827.jpeg",
      "size": 3019993
  },
  {
      "filename": "1699591746164.jpeg",
      "size": 8891453
  },
  {
      "filename": "1699591747698.jpeg",
      "size": 7469369
  },
  {
      "filename": "1699591748642.jpeg",
      "size": 8216641
  },
  {
      "filename": "1699591968948.jpeg",
      "size": 636705
  },
  {
      "filename": "1699591970409.jpeg",
      "size": 6454482
  },
  {
      "filename": "1699591988382.jpeg",
      "size": 4098771
  },
  {
      "filename": "1699592164249.jpeg",
      "size": 636705
  },
  {
      "filename": "1699592166554.jpeg",
      "size": 6454482
  },
  {
      "filename": "1699592183516.jpeg",
      "size": 4098771
  },
  {
      "filename": "1699592326036.jpeg",
      "size": 636705
  },
  {
      "filename": "1699592327639.jpeg",
      "size": 6454482
  },
  {
      "filename": "1699592345175.jpeg",
      "size": 4098771
  },
  {
      "filename": "1699597102262.jpeg",
      "size": 4585555
  },
  {
      "filename": "1699613500108.jpeg",
      "size": 89193
  },
  {
      "filename": "1699613500466.jpeg",
      "size": 109446
  },
  {
      "filename": "1699613500840.jpeg",
      "size": 83168
  },
  {
      "filename": "1699613626971.jpeg",
      "size": 168980
  },
  {
      "filename": "1699613627202.jpeg",
      "size": 153897
  },
  {
      "filename": "1699613627310.jpeg",
      "size": 184858
  },
  {
      "filename": "1699613710184.jpeg",
      "size": 168980
  },
  {
      "filename": "1699613710520.jpeg",
      "size": 153897
  },
  {
      "filename": "1699613710557.jpeg",
      "size": 184858
  },
  {
      "filename": "1699613758021.jpeg",
      "size": 99281
  },
  {
      "filename": "1699613758210.jpeg",
      "size": 159210
  },
  {
      "filename": "1699613758300.jpeg",
      "size": 155137
  },
  {
      "filename": "1699614138680.jpeg",
      "size": 2083055
  },
  {
      "filename": "1699614139895.jpeg",
      "size": 2099047
  },
  {
      "filename": "1699614140740.jpeg",
      "size": 2666864
  },
  {
      "filename": "1699614553085.jpeg",
      "size": 154273
  },
  {
      "filename": "1699614772580.jpeg",
      "size": 4128530
  },
  {
      "filename": "1699614780481.jpeg",
      "size": 4440253
  },
  {
      "filename": "1699614930980.png",
      "size": 570663
  },
  {
      "filename": "1699614931997.png",
      "size": 644869
  },
  {
      "filename": "1699614932917.png",
      "size": 659206
  },
  {
      "filename": "1699616284141.jpeg",
      "size": 237797
  },
  {
      "filename": "1699616284728.jpeg",
      "size": 216506
  },
  {
      "filename": "1699616284876.jpeg",
      "size": 315186
  },
  {
      "filename": "1699616360723.jpeg",
      "size": 115408
  },
  {
      "filename": "1699616361039.jpeg",
      "size": 174851
  },
  {
      "filename": "1699616361221.jpeg",
      "size": 291162
  },
  {
      "filename": "1699616715756.jpeg",
      "size": 3969804
  },
  {
      "filename": "1699616785706.jpeg",
      "size": 82725
  },
  {
      "filename": "1699616794290.jpeg",
      "size": 2992031
  },
  {
      "filename": "1699616831451.jpeg",
      "size": 2477774
  },
  {
      "filename": "1699616930445.jpeg",
      "size": 102037
  },
  {
      "filename": "1699617149784.jpeg",
      "size": 374246
  },
  {
      "filename": "1699617150213.jpeg",
      "size": 165132
  },
  {
      "filename": "1699617150274.jpeg",
      "size": 231247
  },
  {
      "filename": "1699617190188.jpeg",
      "size": 3969804
  },
  {
      "filename": "1699617198031.jpeg",
      "size": 2992031
  },
  {
      "filename": "1699617216437.jpeg",
      "size": 2477774
  },
  {
      "filename": "1699617443337.jpeg",
      "size": 157944
  },
  {
      "filename": "1699617443614.jpeg",
      "size": 231067
  },
  {
      "filename": "1699617443932.jpeg",
      "size": 136740
  },
  {
      "filename": "1699618787283.jpeg",
      "size": 5108697
  },
  {
      "filename": "1699618822853.jpeg",
      "size": 3694419
  },
  {
      "filename": "1699618884721.jpeg",
      "size": 3285164
  },
  {
      "filename": "1699618960868.jpeg",
      "size": 2926175
  },
  {
      "filename": "1699619181254.jpeg",
      "size": 3289262
  },
  {
      "filename": "1699619184317.jpeg",
      "size": 182576
  },
  {
      "filename": "1699619184493.jpeg",
      "size": 5694354
  },
  {
      "filename": "1699619439439.jpeg",
      "size": 132197
  },
  {
      "filename": "1699619439598.jpeg",
      "size": 101235
  },
  {
      "filename": "1699619439683.jpeg",
      "size": 105530
  },
  {
      "filename": "1699619731733.jpeg",
      "size": 259656
  },
  {
      "filename": "1699619732726.jpeg",
      "size": 279981
  },
  {
      "filename": "1699619735756.jpeg",
      "size": 226330
  },
  {
      "filename": "1699619782577.jpeg",
      "size": 238059
  },
  {
      "filename": "1699619783031.jpeg",
      "size": 144196
  },
  {
      "filename": "1699619783150.jpeg",
      "size": 125660
  },
  {
      "filename": "1699619873549.jpeg",
      "size": 238059
  },
  {
      "filename": "1699619874058.jpeg",
      "size": 144196
  },
  {
      "filename": "1699619874253.jpeg",
      "size": 125660
  },
  {
      "filename": "1699619990703.jpeg",
      "size": 153434
  },
  {
      "filename": "1699619990942.jpeg",
      "size": 151751
  },
  {
      "filename": "1699619991074.jpeg",
      "size": 157553
  },
  {
      "filename": "1699620036762.jpeg",
      "size": 160396
  },
  {
      "filename": "1699620037017.jpeg",
      "size": 147395
  },
  {
      "filename": "1699620037105.jpeg",
      "size": 149015
  },
  {
      "filename": "1699620099327.jpeg",
      "size": 3049809
  },
  {
      "filename": "1699620207553.jpeg",
      "size": 3165712
  },
  {
      "filename": "1699620212879.jpeg",
      "size": 3003214
  },
  {
      "filename": "1699620216230.jpeg",
      "size": 2834486
  },
  {
      "filename": "1699620263066.jpeg",
      "size": 3131004
  },
  {
      "filename": "1699620267565.jpeg",
      "size": 3070540
  },
  {
      "filename": "1699620269544.jpeg",
      "size": 3157953
  },
  {
      "filename": "1699620452709.jpeg",
      "size": 282624
  },
  {
      "filename": "1699620453053.jpeg",
      "size": 263779
  },
  {
      "filename": "1699620453224.jpeg",
      "size": 284688
  },
  {
      "filename": "1699621050536.jpeg",
      "size": 158056
  },
  {
      "filename": "1699621098277.jpeg",
      "size": 148823
  },
  {
      "filename": "1699621126122.jpeg",
      "size": 138611
  },
  {
      "filename": "1699621162807.jpeg",
      "size": 157025
  },
  {
      "filename": "1699621170877.jpeg",
      "size": 183497
  },
  {
      "filename": "1699621358444.jpeg",
      "size": 95931
  },
  {
      "filename": "1699621398310.jpeg",
      "size": 117800
  },
  {
      "filename": "1699621436370.jpeg",
      "size": 6243845
  },
  {
      "filename": "1699621632133.jpeg",
      "size": 254623
  },
  {
      "filename": "1699621718085.jpeg",
      "size": 3876380
  },
  {
      "filename": "1699621721242.jpeg",
      "size": 3786413
  },
  {
      "filename": "1699621723949.jpeg",
      "size": 4020939
  },
  {
      "filename": "1699621732659.jpeg",
      "size": 175507
  },
  {
      "filename": "1699621765032.jpeg",
      "size": 2501485
  },
  {
      "filename": "1699621766464.jpeg",
      "size": 2465632
  },
  {
      "filename": "1699621767341.jpeg",
      "size": 2379023
  },
  {
      "filename": "1699621769167.jpeg",
      "size": 156948
  },
  {
      "filename": "1699621919828.jpeg",
      "size": 189056
  }
]

const listAllKeys = (params, out = []) =>
  new Promise((resolve, reject) => {
    s3.listObjectsV2(params).promise()
      .then(({ Contents, IsTruncated, NextContinuationToken }) => {
        out.push(...Contents);
        !IsTruncated ? resolve(out) : resolve(listAllKeys(Object.assign(params, { ContinuationToken: NextContinuationToken }), out));
      })
      .catch(reject);
  });


const arrayImagesAWS = (data) => {

  const files = [];

  data.forEach(file => {

    const { newPath, filename } = file;
    const fileStream = fs.createReadStream(newPath);

    const params = {
      Bucket: "resize-dia-nacional-cepillado-2023-v3",
      Key: filename,
      Body: fileStream
    };

    files.push(s3.upload(params).promise());
  });
  return Promise.all(files);

}
exports.ListObjects = async (req, res, next) => {

  try {

    // const data = await listAllKeys({
    //   Bucket: process.env.AWS_BUCKET_NAME
    // })

    // const keys = data.map(({ Key, Size }) => ({ filename: Key, size: Size }));

    for (let i = 0; i < keys.length; i++) {
      // const data = await s3.getObject({
      //   Bucket: process.env.AWS_BUCKET_NAME,
      //   Key: keys[i].filename
      // }).promise();

      const ruta = path.join(__dirname, 'uploads', keys[i].filename);

      // fs.writeFileSync(ruta, data.Body);
      keys[i].path = ruta;
    }

    const dataCompress = await compressImage(keys);

    const response = await arrayImagesAWS(dataCompress);
    console.log(response);
    res.send(keys);


  } catch (error) {
    next(error);
  }
};