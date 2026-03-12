import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this project.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  category: {
    type: String,
    required: [true, "Please provide the project category"],
  },
  role: { type: String },
  year: { type: String },
  team_size: { type: String },
  methodology: { type: String },
  impact: { type: String },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  challenge: { type: String },
  solution: { type: String },
  modules: { type: [String], default: [] },
  stack_details: {
    frontend: String,
    backend: String,
    database: String,
    tools: String
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
