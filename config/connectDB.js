import moongose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Database is already connected");
  }
  mongoose.connect(process.env.DATABASE_URL, {}, (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  });
};
