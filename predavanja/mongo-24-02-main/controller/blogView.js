const Blog = require("../model/blogMode");

exports.getBlogView = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status().render("blogs", {
      blogs: blogs,
      title: "All blogs",
      godina: "2024",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
