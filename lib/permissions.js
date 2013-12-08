// check that the userId specified owns the documents
ownsSettings = function(userId, doc) {
  return doc && doc.userId === userId;
}