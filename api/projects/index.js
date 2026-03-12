import dbConnect from '../../src/lib/mongodb';
import Project from '../../src/models/Project';
import cloudinary from '../../src/lib/cloudinary';
import multiparty from 'multiparty';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const form = new multiparty.Form();
        const data = await new Promise((resolve, reject) => {
          form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
          });
        });

        const { fields, files } = data;
        
        // Upload image to Cloudinary
        let imageUrl = '';
        if (files.image && files.image[0]) {
          const result = await cloudinary.uploader.upload(files.image[0].path, {
            folder: 'portfolio_projects',
          });
          imageUrl = result.secure_url;
        }

        const project = await Project.create({
          title: fields.title[0],
          category: fields.category[0],
          role: fields.role ? fields.role[0] : '',
          year: fields.year ? fields.year[0] : '',
          team_size: fields.team_size ? fields.team_size[0] : '',
          methodology: fields.methodology ? fields.methodology[0] : '',
          impact: fields.impact ? fields.impact[0] : '',
          description: fields.description[0],
          challenge: fields.challenge ? fields.challenge[0] : '',
          solution: fields.solution ? fields.solution[0] : '',
          modules: fields.modules ? JSON.parse(fields.modules[0]) : [],
          stack_details: fields.stack_details ? JSON.parse(fields.stack_details[0]) : {},
          image: imageUrl,
          tags: fields.tags ? JSON.parse(fields.tags[0]) : [],
          link: fields.link ? fields.link[0] : '',
          type: fields.type ? fields.type[0] : 'small',
        });

        res.status(201).json({ success: true, data: project });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
