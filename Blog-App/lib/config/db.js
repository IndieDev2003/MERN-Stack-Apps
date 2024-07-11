import moongoose from "moongoose";

export const ConnectDB = async () => {
  await moongoose.connect(
    "mongodb+srv://fbdgagansuman:localvocal@blog-app-cluster.bijbc2l.mongodb.net/blog-app-cluster"
  );
  console.log("DB Connect");
};
