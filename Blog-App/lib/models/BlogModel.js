import moongoose from "moongoose";

const Schema = new moongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  author_img: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const BlogModel = moongoose.models.blog || moongoose.model("blog", Schema);

export default BlogModel;
