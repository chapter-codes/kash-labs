
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    unique: true,
  },
  logo: String,
  category: [String],
  description: {
    type: String,
    lowercase: true,
  },
  link: String,
  dateCreated: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

// interface IProject extends  mongoose.Document {
//   updatedAt: Date;
//   // other fields...
// }

ProjectSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});


export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);


