const mongoose = require("mongoose");
const db = "mongodb://localhost/douban-test";
mongoose.Promise = global.Promise;

exports.connect = () => {
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }

    mongoose.connect(db, {
      useNewUrlParser: true
    })

    mongoose.connection.on("disconected", () => {
      maxConnectTimes++;

      if (maxConnectTimes<5) {
        mongoose.connect(db);
      } else {
        throw new Error("please check database status");
      }
    })

    mongoose.connection.on("error", err => {
      maxConnectTimes++;
      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("please check database status");
      }
      reject(err);


    })

    mongoose.connection.once("open", () => {
      resolve();

      const Dog = mongoose.model("dog", { name: String });
      const dogA = new Dog({ name: "rand" });
      dogA.save().then(() => {
        console.log("wang!")
      })
      console.log("MongoDB connected successfully");


    })

    

  })

  

}