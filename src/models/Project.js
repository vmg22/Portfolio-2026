import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this project.'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  category: {
    type: String,
    required: [true, "Please provide the project category"],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  tags: {
    type: [String],
    default: [],
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    enum: ['large', 'small'],
    default: 'small',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
