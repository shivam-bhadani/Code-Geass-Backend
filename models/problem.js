const mongoose = require('mongoose');
const slugify = require('slugify');

const problemSchema = mongoose.Schema({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
    description: { type: String, required: true },
});

problemSchema.pre('validate', function(next) {
    this.slug = slugify(this.slug, {lower: true, strict: true});
    next();
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;