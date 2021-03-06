module.exports = ({ mongo }) => ({
  film: {
    getAll: () => mongo.collection('films').find({}).toArray(),
    getById: (episode_id) => mongo.collection('films').findOne({ episode_id }),
  }
});