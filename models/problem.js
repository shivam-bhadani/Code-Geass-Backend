const path = require("path");
const mongoose = require('mongoose');
const slugify = require('slugify');
const writeContentInFile = require("../utils/writeContentInFile");

const problemSchema = mongoose.Schema({
    slug: {type: String, required: true},
    title: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
    description: { type: String, required: true },
    input: { type: String, required: true }, 
    output: { type: String, required: true }
});

problemSchema.pre('save', function(next) {
  console.log(this);
    this.slug = slugify(this.title, {lower: true, strict: true});
    let inputFileDir = path.join(__dirname, "../inputs");
    writeContentInFile(inputFileDir, this.slug + ".txt", this.input);
    this.output = (this.output).trim();
    next();
});

problemSchema.pre('findOneAndUpdate', function(next) {
    const update = this._update;
    if (update.title) {
      this.slug = slugify(update.title, { lower: true, strict: true });
    }
    let inputFileDir = path.join(__dirname, '../inputs');
    writeContentInFile(inputFileDir, this.slug + '.txt', update.input);
    update.output = update.output.trim();
    next();
  });

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;