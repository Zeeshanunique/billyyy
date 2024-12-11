// Create a new file: models/Form.ts
import mongoose from 'mongoose';

const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  message: String,
}, { timestamps: true });

export const Form = mongoose.models.Form || mongoose.model('Form', FormSchema);