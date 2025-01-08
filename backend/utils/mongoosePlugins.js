function excludeIsDeletedPlugin(schema) {
  // Add `isDeleted` to all schemas
  schema.add({ isDeleted: { type: Boolean, default: false, select: false } });

  // Pre-query middleware to filter out deleted documents
  schema.pre(["find", "findOne", "findById"], function (next) {
    if (!this.getFilter().hasOwnProperty("isDeleted")) {
      this.where({ isDeleted: false });
    }
    next();
  });
}

const mongoosePlugins = { excludeIsDeletedPlugin };

module.exports = mongoosePlugins;
